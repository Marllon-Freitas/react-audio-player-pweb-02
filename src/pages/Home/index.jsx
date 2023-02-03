import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import MainWrapper from "../../components/Main/";
import Player from "../../components/Player/Player";
import SideBar from "../../components/SideBar";
import { getTopSongs } from "../../services/";
import { getAlbumImages } from "../../services/";
import { Link, useParams } from "react-router-dom";
import MusicDetails from "../MusicDetails";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [tracks, setTracks] = useState([]);
  const [albumsImages, setAlbumsImages] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTopSongs()
      .then((r) => {
        setTracks(r.data.tracks);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (tracks.length > 0) {
      tracks.forEach((track) => {
        getAlbumImages(track.albumId)
          .then((r) => {
            setAlbumsImages((prevState) => [...prevState, r.data]);
          })
          .catch((e) => console.log(e));
      });
    }
  }, [tracks]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SideBar />
          {(params.id && (
            <MusicDetails
              tracksSong={tracks}
              albumsImages={
                typeof albumsImages !== "undefined" ? albumsImages : []
              }
            />
          )) || (
            <MainWrapper
              tracksSong={tracks}
              albumsImages={
                typeof albumsImages !== "undefined" ? albumsImages : []
              }
            />
          )}
          <Player
            tracksSong={tracks}
            albumsImages={
              typeof albumsImages !== "undefined" ? albumsImages : []
            }
          />
        </>
      )}
    </>
  );
}

export default Home;
