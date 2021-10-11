const express = require('express');
const getAll = require('./mysql/getAll');
const getID = require('./mysql/getID');


const app = express();

app.get('/authors', async (_req, res) => {
  const result = await getAll()
  res.status(202).json(result);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getID(id);
  res.status(202).json(result);
})

app.use(express())

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
