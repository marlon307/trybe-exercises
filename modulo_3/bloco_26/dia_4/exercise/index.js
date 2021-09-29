const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
  console.log(req.query);
  if (age > 17) {
    res.status(201).josn({ message: name })
  } else {
    res.status(401).josn({ message: 'Unauthorized' })
  }
})

app.listen(3001, () => {
  console.log('url: http://localhost:3001');
})
