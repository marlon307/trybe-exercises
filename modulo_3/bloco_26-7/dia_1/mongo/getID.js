const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const getID = async (id) => {
  if (!ObjectId.isValid(id))
    return null;

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData)
    return null;

  return authorData;
}

module.exports = getID;
