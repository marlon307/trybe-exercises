const connection = require('./connectionMysql');

const postBook = async (title, idAuthor) =>
  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, idAuthor]).catch(() => 400)

module.exports = postBook;
