import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { getMusicGenre, getMusicTag } from "../../services";
import {
  MusicDetailsBody,
  MusicDetailsContent,
  MusicDetailsHeader,
  MusicDetailsWrapper,
} from "./styled";

function MusicDetails({ tracksSong, albumsImages }) {
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState(tracksSong);
  const [musicGenre, setMusicGenre] = useState([]);
  const [musicTag, setMusicTag] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id.includes(".")) return;
    let id = params.id;
    let primeiraParte = id.slice(0, 3);
    let segundaParte = id.slice(3);
    id = primeiraParte + "." + segundaParte;
    params.id = id;
    console.log(id);
  }, []);

  useEffect(() => {
    if (tracksSong.length > 0) {
      const music = tracksSong.find((track) => track.artistId === params.id);
      setMusic(music);
    }
  }, [tracksSong]);

  useEffect(() => {
    if (music) {
      setIsLoading(true);
      getMusicGenre(music?.links?.genres?.ids)
        .then((r) => {
          setMusicGenre(r.data.genres);
        })
        .catch((e) => console.log(e))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [music]);

  useEffect(() => {
    if (music) {
      setIsLoading(true);
      getMusicTag(music?.links?.tags?.ids)
        .then((r) => {
          setMusicTag(r.data.tags);
        })
        .catch((e) => console.log(e))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [music]);

  console.log(musicTag);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <MusicDetailsWrapper>
          <div className="content">
            <img
              className="blur-img"
              src={
                albumsImages.length > 0 &&
                albumsImages.find(
                  (image) => image?.images[0]?.contentId === music?.albumId
                )
                  ? albumsImages.find(
                      (image) => image?.images[0]?.contentId === music?.albumId
                    ).images[0]?.url
                  : "" || ""
              }
              alt=""
            />
            <MusicDetailsHeader>
              <Link to="/">
                <MdArrowBackIosNew size={24} />
              </Link>
            </MusicDetailsHeader>
            <MusicDetailsContent>
              <div className="music-details__image">
                <img
                  src={
                    albumsImages.length > 0 &&
                    albumsImages.find(
                      (image) => image?.images[0]?.contentId === music?.albumId
                    )
                      ? albumsImages.find(
                          (image) =>
                            image?.images[0]?.contentId === music?.albumId
                        ).images[0]?.url
                      : "" || ""
                  }
                  alt=""
                />
              </div>
              <div className="music-details__info">
                <p>Música</p>
                <h2>{music?.name ? music.name : "nome da música"}</h2>
                <div className="music-details__info_artist">
                  <img
                    src={
                      albumsImages.length > 0 &&
                      albumsImages.find(
                        (image) =>
                          image?.images[0]?.contentId === music?.albumId
                      )
                        ? albumsImages.find(
                            (image) =>
                              image?.images[0]?.contentId === music?.albumId
                          ).images[2]?.url
                        : "" || ""
                    }
                    alt=""
                  />
                  <h3>
                    {music?.artistName ? music.artistName : "nome da música"}
                  </h3>
                </div>
              </div>
            </MusicDetailsContent>
          </div>
          <MusicDetailsBody>
            <div className="music-details__body__info">
              <div className="music-details__body__info__album">
                <h2>Álbum:</h2>
                <p>{music.albumName}</p>
              </div>
              <div className="music-details__body__info__artist">
                <h2>Artista:</h2>
                <p>{music.artistName}</p>
              </div>
              <div className="music-details__body__info__genre">
                {musicGenre.length > 0 && (
                  <>
                    <h2>{musicGenre.length >= 1 ? "Gêneros:" : "Gênero:"}</h2>
                    {musicGenre.map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </>
                )}
              </div>
              <div className="music-details__body__info__year">
                {musicTag.length > 0 && (
                  <>
                    <h2>{musicTag.length >= 1 ? "Tags:" : "Tag:"}</h2>
                    {musicTag.map((tag) => (
                      <p key={tag.id}>{tag.name}</p>
                    ))}
                  </>
                )}
              </div>
            </div>
          </MusicDetailsBody>
        </MusicDetailsWrapper>
      )}
    </>
  );
}

export default MusicDetails;
