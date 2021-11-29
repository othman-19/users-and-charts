const express = require('express');
const User = require('../models/User');

const router = express.Router();

/* GET home page. */
router.get('/users.xml', async (req, res, next) => {
  await User.find()
    .select({
      _id: 1,
      firstName: 1,
      lastName: 1,
      email: 1,
      userData: 1,
    })
    .exec()
    .then(users => {
      if (!users.length) return res.status(404).end();
      let data = '<?xml version="1.0" encoding="UTF-8"?>';
      data += '<users>';
      users.forEach(user => {
        const {
          firstName,
          lastName,
          email,
          userData,
        } = user.toObject();
        data += `<user>
          <name>Name: ${firstName} ${lastName}</name>
          <email>Email: ${email}</email>
          <userData>Data: ${userData}</userData>
        </user>`;
      });
      data += '</users>';
      res.header('Content-Type', 'application/xml');
      return res.status(200).send(data);
    })
    .catch(err => res.json(err));
});

router.get('/', (req, res, next) => {
  let data = '<?xml version="1.0" encoding="UTF-8"?>';
  data += '<welcome>hooray! welcome to users and charts api! </welcome>';
  data += '<info>For users in XML data use this route /users.xml </info>';
  data += '<info>For users in JSON data use this route /api/v1/users </info>';
  res.header('Content-Type', 'application/xml');
  return res.status(200).send(data);
});

module.exports = router;
