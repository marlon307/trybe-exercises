const connection = require('./connectionMongo');

function validItens(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({ results: 'Todo os campos são obrigatorio.' });
  }
  if (password.length < 6) {
    return res.status(404).json({ results: 'A senha de ter pelo meno 6 caracter' });
  }
  next();
}
// {
//   "firstName": "Calebe",
//   "lastName": "Junior",
//   "email": "calebe.junior@gmail.com",
//   "password": "d496d5ea2442"
// }
const postUser = (firstName, lastName, email, password) => {
  return connection()
    .then((db) =>
      db.collection('users')
      .insertOne({
        firstName,
        lastName,
        email,
        password,
      }))
    .then(() => 'Usuario cadastrado com sucesso');
}

module.exports = { postUser, validItens };
