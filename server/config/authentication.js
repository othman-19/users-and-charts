const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, jwtSecret);
    req.userData = decoded;
    return next();
  } catch (e) {
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};
