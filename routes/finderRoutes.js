const express = require('express');
const router = express.Router();
const { search } = require('../controllers/finderController');

router.get('/', (req, res) => res.sendFile('index.html', { root: 'views' }));
router.get('/search', search);

module.exports = router;
