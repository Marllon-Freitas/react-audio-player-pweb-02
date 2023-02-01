import { useRef, useState, useEffect } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { PlayerWrapper } from "./styled";

function Player({ tracksSong, albumsImages }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  const [tracks, setTracks] = useState(tracksSong);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [albumImage, setAlbumImage] = useState(albumsImages);
  const music = useRef();

  useEffect(() => {
    setTracks(tracksSong);
  }, [tracksSong]);

  useEffect(() => {
    setAlbumImage(albumsImages);
  }, [albumsImages]);

  useEffect(() => {
    if (tracks.length > 0) {
      setCurrentSong(tracks[currentIndex]);
    }
  }, [tracks, currentIndex]);

  const loadSong = (url) => {
    setIsPlaying(false);
    music.current.src = url;
    play();
  };

  const play = () => {
    setTimeout(function () {
      music.current.play();
      setIsPlaying(true);
    }, 150);
  };

  const pause = () => {
    music.current.pause();
    setIsPlaying(false);
  };

  const next = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    loadSong(tracks[currentIndex].previewURL);
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(tracks.length - 1);
    }
    loadSong(tracks[currentIndex].previewURL);
  };

  return (
    <PlayerWrapper>
      <div className="player">
        <div className="player__container">
          <div className="player__container__content">
            <div className="player__container__image">
              <img
                src={
                  albumImage.length > 0 &&
                  albumImage.find(
                    (image) =>
                      image?.images[0]?.contentId === currentSong?.albumId
                  )
                    ? albumImage.find(
                        (image) =>
                          image?.images[0]?.contentId === currentSong?.albumId
                      ).images[0]?.url
                    : "" || ""
                }
                alt={currentSong?.name}
              />
            </div>
            <div className="player__container__info">
              <h2>{currentSong?.name}</h2>
              <p>{currentSong?.artistName}</p>
            </div>
          </div>
          <div className="player__container__controls">
            <button onClick={previous}>
              <MdSkipPrevious fill={currentIndex > 0 ? "#fff" : "#ccc"} />
            </button>
            {isPlaying ? (
              <button onClick={pause}>
                <AiFillPauseCircle size={32} />
              </button>
            ) : (
              <button onClick={play}>
                <BsFillPlayCircleFill />
              </button>
            )}
            <button onClick={next}>
              <MdSkipNext />
            </button>
          </div>
        </div>
        <audio ref={music} src={currentSong?.previewURL} onEnded={next}></audio>
      </div>
    </PlayerWrapper>
  );
}

export default Player;
