const connection = require('./connectionMysql');

const putAuthor = async (firstName, middleName, lastName) =>
  connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName])

module.exports = putAuthor;
