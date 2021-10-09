const connection = require('./connectionMongo')

const getAll = async () =>
  await connection()
  .then((db) =>
    db.collection('authors').find().toArray())
  .then((authors) =>
    authors.map(({ _id, firstName, middleName, lastName }) => ({
      id: _id,
      firstName,
      middleName,
      lastName,
    }))
  )

module.exports = getAll;
