const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// 1
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

// 2
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).json({ name })
})

//3

app.post('/greetings', (req, res) => {
  const { name, age } = req.query;

  if (Number(age) > 17) {
    return res.status(201).json({ message: `Hello, ${name}` })
  }
  res.status(401).json({ message: '401 - Unauthorized' })
})

//4

app.listen(3001, () => {
  console.log('url: http://localhost:3001');
})
