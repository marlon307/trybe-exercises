const express = require('express');
const getAll = require('./mysql/getAll');


const app = express();

app.get('/', async (req, res) => {
  const result = await getAll()
  res.status(202).json(result);
})

app.use(express())

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
