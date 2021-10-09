const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const getUserID = async (id) => {
  if (!ObjectId.isValid(id))
    return null

  const userId = await connection()
    .then((db) => db.collection('users')
      .findOne(new ObjectId(id)));

  if (!userId)
    return null;

  return userId;
}

module.exports = getUserID;
