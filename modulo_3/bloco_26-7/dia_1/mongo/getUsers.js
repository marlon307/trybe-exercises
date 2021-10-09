const connection = require('./connectionMongo');

const getAllUsers = async () =>
  await connection()
  .then((db) =>
    db.collection('users').find().toArray())
  .then((user) => (
    user.map(({ _id, firstName, lastName, email, password }) => ({
      id: _id,
      firstName,
      lastName,
      email,
      password
    }))
  ))

const getAll = async () =>
  await connection()
  .then((db) =>
    db.collection('authors').find().toArray())
  .then((authors) =>
    authors.map((_id, firstName, middleName, lastName) => ({
      id: _id,
      firstName,
      middleName,
      lastName,
    }))
  )

module.exports = getAllUsers;
