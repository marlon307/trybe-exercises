const express = require('express');
const cors = require('cors');
const getAll = require('./mongo/getAll');
const getID = require('./mongo/getID');

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

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
