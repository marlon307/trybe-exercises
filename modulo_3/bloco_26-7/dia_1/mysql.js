const express = require('express');
const isValid = require('./mysql/isValid');
const getAll = require('./mysql/getAll');
const getID = require('./mysql/getID');
const postAuthor = require('./mysql/postAuthor');
const postBook = require('./mysql/postBook');

const app = express();
app.use(express.json());

app.get('/authors', async (_req, res) => {
  const result = await getAll()
  res.status(202).json(result);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getID(id);
  res.status(202).json(result);
})

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await postAuthor(firstName, middleName, lastName);
  res.status(202).json({ message: 'Autor criado com sucesso!' });
})

app.post('/postbook', async (req, res) => {
  const { idAuthor, title } = req.body;
  const cathErro = await postBook(title, idAuthor);
  if (cathErro === 400)
    return res.status(400).json({ message: 'Author não existe' });
  res.status(201).json({ message: 'Livro criado com sucesso!' });
})

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
