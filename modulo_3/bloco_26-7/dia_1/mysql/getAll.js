const connection = require('./connectionMysql')

async function getAll() {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return authors;
}

module.exports = getAll;
