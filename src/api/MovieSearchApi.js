import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzVkOTcxODI3ZTM4MThhM2ZkOWQxZjcxMjVlYTgwYiIsIm5iZiI6MTc0MzYwNjM4MC4xOTI5OTk4LCJzdWIiOiI2N2VkNTI2Y2UxNTdhZWYzZjIwMTUxNWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hq7QMMCqCAaE56mC9GpkBk4aIT6SXZri6p49Bwimi3Q",
  },
  include_adult: false,
};

export const getImagePath = (relativePath) => {
  return `https://image.tmdb.org/t/p/w500${relativePath}`;
};

export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(`/search/movie`, {
      ...options,
      params: {
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieDetailsById = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}`, { ...options });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day`, { ...options });
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieReviews = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, { ...options });
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, { ...options });
    return response.data.cast;
  } catch (error) {
    throw new Error(error.message);
  }
};
