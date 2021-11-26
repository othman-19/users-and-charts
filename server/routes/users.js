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

router.post('/login', (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
      bcrypt.compare(
        req.body.password,
        user.password,
        (err, result) => {
          if (err) {
            return res.status(401).json({
              message: 'Auth failed',
            });
          }
          if (result) {
            const token = jwt.sign(
              { email: user.email, userId: user._id },
              jwtSecret,
              { expiresIn: '1h' },
            );
            return res.status(200).json({
              message: 'Auth successful',
              token,
            });
          }
        },
      );
    })
    .catch(err => res.status(500).json({
      error: err,
    }));
});

router.delete('/:userId', (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted',
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
