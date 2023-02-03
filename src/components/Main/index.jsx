import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MainWrapper } from "./styled";

function Main({ tracksSong, albumsImages }) {
  const [mainAlbumsImages, setMainAlbumsImages] = useState(albumsImages);
  const params = useParams();
  useEffect(() => {
    setMainAlbumsImages(albumsImages);
  }, [albumsImages]);
  return (
    <MainWrapper>
      <div className="main__content__">
        <div className="main__content__cards">
          {tracksSong.map((tracks) => (
            <Link
              className="main__content__card"
              key={tracks.id}
              to={`/music/${tracks.artistId.replace(".", "")}`}
            >
              <div className="main__content__card__image">
                <img
                  src={
                    mainAlbumsImages.length > 0 &&
                    mainAlbumsImages.find(
                      (image) => image?.images[0]?.contentId === tracks?.albumId
                    )
                      ? mainAlbumsImages.find(
                          (image) =>
                            image?.images[0]?.contentId === tracks?.albumId
                        ).images[0]?.url
                      : "" || ""
                  }
                  alt={tracks.name}
                />
              </div>
              <div className="main__content__card__info">
                <h2>{tracks.name}</h2>
                <h3>{tracks.artistName}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
}

export default Main;
