const express = require('express');
const isValid = require('./mysql/isValid');
const getAll = require('./mysql/getAll');
const getID = require('./mysql/getID');
const putAuthor = require('./mysql/putAuthor');


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

  await putAuthor(firstName, middleName, lastName);
  res.status(202).json({ message: 'Autor criado com sucesso! ' });
})

app.use(express())

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
