const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

// ex 6161ad163ca9d36afcf4646e
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
