const jwt = require('jsonwebtoken');

const secret = 'trybeervamoficalokao';

module.exports = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
};
