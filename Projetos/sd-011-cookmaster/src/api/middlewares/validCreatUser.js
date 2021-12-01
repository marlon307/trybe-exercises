const { getEmailExist } = require('../models/modelUsers');

const validUser = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const userExist = async (req, res, next) => {
  const { email } = req.body;

  const checkEmailExist = await getEmailExist(email);

  if (checkEmailExist) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  next();
};

module.exports = {
  validEmail,
  validPassword,
  validUser,
  userExist,
};
