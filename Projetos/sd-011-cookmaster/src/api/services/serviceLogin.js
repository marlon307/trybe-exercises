const { modelLogin } = require('../models/modelLogin');

const serviceLogin = async (objectLogin) => {
  const getLogin = await modelLogin(objectLogin);
  return getLogin;
};

module.exports = {
  serviceLogin,
};
