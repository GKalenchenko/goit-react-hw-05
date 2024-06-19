import axios from "axios";

const KEY = "a68c589f146892e7c1a2af99a7b70b7c";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const getTrendMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data;
};

const getMovieByKeyword = async (keyWord) => {
  const response = await axios.get(
    `search/movie?query=${keyWord}&include_adult=false&language=en-US&page=1&api_key=${KEY}`
  );
  return response.data;
};

const getMovieById = async (id) => {
  const response = await axios.get(`movie/${id}?language=en-US&api_key=${KEY}`);
  return response.data;
};

const getMovieCredits = async (id) => {
  const response = await axios.get(
    `movie/${id}/credits?language=en-US&api_key=${KEY}`
  );
  return response.data;
};

const getMovieReviews = async (id) => {
  const response = await axios.get(
    `movie/${id}/reviews?language=en-US&page=1&api_key=${KEY}`
  );
};

export {
  getTrendMovies,
  getMovieByKeyword,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
};
