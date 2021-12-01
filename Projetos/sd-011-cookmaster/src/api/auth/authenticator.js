const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const jwtConfig = {
  algorithm: 'HS256',
};

const gernerateToken = (object) => {
  const token = jwt.sign({ data: object }, secret, jwtConfig);
  return token;
};

const validAuth = (token) => {
  const decode = jwt.verify(token, secret);
  return decode;
};

module.exports = {
  validAuth,
  gernerateToken,
};
