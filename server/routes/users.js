/* eslint-disable consistent-return */
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user) {
        return res.status(409).json({
          message: 'Mail exists',
        });
      }

      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        });
        user.save()
          .then(result => res.status(201).json({
            message: 'User created',
          }))
          .catch(err => res.status(500).json({
            error: err,
          }));
      });
    });
});

module.exports = router;
