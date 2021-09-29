const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json());
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

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(202).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

//5

function readFile() {
  if (!fs.existsSync('./simpsons.json')) return 505;

  const read = fs.readFileSync('./simpsons.json', 'utf-8');
  return JSON.parse(read);
}

function readFileId(id) {
  if (!fs.existsSync('./simpsons.json')) return 505;

  const read = fs.readFileSync('./simpsons.json', 'utf-8');
  const result = JSON.parse(read)[id.toString()];

  if (result) return JSON.parse(read)[id.toString()];

  return 404;
}
//6
app.get('/simpsons', (req, res) => {
  res.status(202).json(readFile())
})

//7
app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  if (readFileId(id) !== 404) {
    return res.status(202).json(readFileId(id))
  }
  res.status(404).json({ message: 'simpson not found' })
})


app.listen(3001, () => {
  console.log('url: http://localhost:3001');
})
