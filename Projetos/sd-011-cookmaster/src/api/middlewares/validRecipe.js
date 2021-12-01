const { validAuth } = require('../auth/authenticator');

const validRecipe = (req, res, next) => {
  const { name, ingredients, preparation } = req.body;

  if (!name || !ingredients || !preparation) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

const chekTokenRecipe = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    validAuth(authorization);
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
  next();
};

const tokenExists = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  next();
};

module.exports = {
  validRecipe,
  chekTokenRecipe,
  tokenExists,
};
