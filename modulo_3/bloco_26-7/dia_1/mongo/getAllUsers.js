const connection = require('./connectionMongo');

const getAllUsers = async () =>
  await connection()
  .then((db) =>
    db.collection('users').find().toArray())
  .then((users) => (
    users.map(({ _id, firstName, lastName, email, password }) => ({
      id: _id,
      firstName,
      lastName,
      email,
      password
    }))
  ))

module.exports = getAllUsers;
