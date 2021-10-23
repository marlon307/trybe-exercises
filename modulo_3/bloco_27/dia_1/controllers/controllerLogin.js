const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const jwtconfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
}

function controllerLogin(req, res) {
  const { user, psw } = req.body;

  const token = jwt.sign({ data: user }, secret, jwtconfig);
  try {
    console.log(user, psw);
    res.status(200).json({
      message: 'Logado com sucesso',
      token
    })
  } catch (error) {
    return error.message;
  }
}

module.exports = controllerLogin;
