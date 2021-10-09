const express = require('express');
const cors = require('cors');
const getAll = require('./mongo/getAll');
const getID = require('./mongo/getID');
const getAllUsers = require('./mongo/getUsers');
const { validItens, postUser } = require('./mongo/postUser');

const app = express();

app.use(express.json());
app.use(cors())


app.get('/', async (req, res) => {
  const results = await getAll()
  res.status(202).json(results);
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const results = await getID(id);
  res.status(202).json(results);
});

app.post('/user', validItens, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const resultStatus = await postUser(firstName, lastName, email, password);
  res.status(201).json({ results: resultStatus });
});

app.get('/users', async (req, res) => {
  const getusers = await getAllUsers();
  res.status(202).json(getusers);
});

app.listen(3001, () => {
  console.log('http://localhost:3001/');
});
