import http from "../http";

const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi";

const getTopSongs = () => {
  return http.get(`v2.2/tracks/top?apikey=${key}`);
};

const getAlbumImages = (id) => {
  return http.get(`v2.2/albums/${id}/images?apikey=${key}`);
};

// get info aboute a single song
const getMusicInfo = (id) => {
  return http.get(`v2.2/tracks/${id}?apikey=${key}`);
};

const getMusicGenre = (ids) => {
  return http.get(`v2.2/genres/${ids}?apikey=${key}`);
};

const getMusicTag = (ids) => {
  return http.get(`v2.2/tags/${ids}?apikey=${key}`);
};

export { getTopSongs, getAlbumImages, getMusicInfo, getMusicGenre, getMusicTag };
