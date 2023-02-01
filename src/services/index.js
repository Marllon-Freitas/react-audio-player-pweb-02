import http from "../http";

const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi";

const getTopSongs = () => {
  return http.get(`/tracks/top?apikey=${key}`);
};

const getAlbumImages = (id) => {
  return http.get(`/albums/${id}/images?apikey=${key}`);
};

export { getTopSongs, getAlbumImages };
