const { serviceLogin } = require('../services/serviceLogin');
const { gernerateToken } = require('../auth/authenticator');

const returnNewObject = (object) => {
  const { _id, name, email, role } = object;

  if (object) {
    return {
      _id,
      name,
      email,
      role,
    };
  }
};

const controllerLogin = async (req, res) => {
  const objectLogin = req.body;
  const getServiceLogin = await serviceLogin(objectLogin);

  if (getServiceLogin) {
    const newObject = returnNewObject(getServiceLogin);

    return res.status(200).json({
      token: gernerateToken(newObject),
    });
  }

  return res.status(401).json({
    message: 'Incorrect username or password',
  });
};

module.exports = {
  controllerLogin,
};
