// controllers/finderController.js
const { fetchMovies, fetchBooks } = require('../models/finderModel');

const search = async (req, res) => {
  const query = req.query.q || '';
  const type = req.query.type || 'both';

  if (!query) return res.sendFile('index.html', { root: 'views' });

  try {
    let movies = [], books = [];

    if (type === 'movie' || type === 'both') {
      movies = await fetchMovies(query);
    }
    if (type === 'book' || type === 'both') {
      books = await fetchBooks(query);
    }

    res.send({ movies, books });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Failed to fetch data' });
  }
};

module.exports = { search };
