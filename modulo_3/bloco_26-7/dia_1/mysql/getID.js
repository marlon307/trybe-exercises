const connection = require('./connectionMysql');

async function getID(id) {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?';
  const [authorData] = await connection.execute(query, [id]);
  return authorData;
}

module.exports = getID;
