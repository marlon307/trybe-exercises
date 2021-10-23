function validLogin(req, res, next) {
  const { user, psw } = req.body;
  if (user.length < 5 || psw.length < 5) {
    return res.status(500).json({
      error: 'Todos os campos deve ter no mino 5 caracteres'
    })
  }
  if (!user || !psw) {
    return res.status(500).json({
      error: 'Todos os campos são obrigatorio'
    })
  }
  next()
}
