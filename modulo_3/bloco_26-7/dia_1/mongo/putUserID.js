const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const putUserID = async (id, firstName, lastName, email, password) => {

  if (!ObjectId.isValid(id))
    return null;

  const userId = ObjectId(id);
  const newData = {
    firstName,
    lastName,
    email,
    password
  }

  const result = await connection()
    .then((db) =>
      db.collection('users')
      .updateOne({ _id: userId }, { $set: newData }))
    .then(() => 'Ususario alterado com sucesso')

  if (!result)
    return null;

  return result;
}

module.exports = putUserID;
