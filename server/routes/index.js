const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/api/v1/welcome');
});

router.get('/api/v1/welcome', (req, res, next) => {
  res.json({ message: 'hooray! welcome to users and charts api!' });
});

module.exports = router;
