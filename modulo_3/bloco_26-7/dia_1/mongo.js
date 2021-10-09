const express = require('express');
const cors = require('cors');
const getAll = require('./mongo/getAll');

const app = express();

app.use(express.json());
app.use(cors())


app.get('/', async (req, res) => {
  const results = await getAll()
  res.status(202).json(results);
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
