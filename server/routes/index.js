const express = require('express');
const User = require('../models/User');

const router = express.Router();

/* GET home page. */
router.get('/xmlUsers', async (req, res, next) => {
  await User.find()
    .exec()
    .then(users => {
      if (!users.length) return res.status(404).end();
      let data = '<?xml version="1.0" encoding="UTF-8"?>';
      data += '<users>';
      users.forEach(user => {
        const { name } = user.toObject();
        data += `<user> <name>Name ${name}</name> </user>`;
      });
      data += '</users>';
      res.header('Content-Type', 'application/xml');
      return res.status(200).send(data);
    })
    .catch(err => res.json(err));
});

router.get('/api/v1/welcome', (req, res, next) => {
  res.json({ message: 'hooray! welcome to users and charts api!' });
});

module.exports = router;
