const { MongoClinent } = require('mongodb');

const OPTIONS = {
  useNewUrlParse: true,
  useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://localhost:27017';

let db = null;

const connections = () => {
  return db ?
    Promise.resolve(db) :
    MongoClinent.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('model_example');
      return db;
    })
}

module.exports = connections;
