function controllerLogin(req, res) {
  const { user, psw } = req.body
  try {
    console.log(user, psw);
    res.status(200).json({
      message: 'Logado com sucesso',
      token: 'kdhsfkhsdfkjshdfk'
    })
  } catch (error) {
    return error.message;
  }
}

module.exports = controllerLogin;
