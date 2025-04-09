const axios = require('axios');

const fetchMovies = async (query) => {
  const res = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${query}`);
  return res.data.Search || [];
};

const fetchBooks = async (query) => {
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`);
  return res.data.items || [];
};

module.exports = { fetchMovies, fetchBooks };
