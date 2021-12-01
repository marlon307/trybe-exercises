const express = require('express');
const bodyParser = require('body-parser');
const getAllTalkers = require('./routes/getAllTalkers');
const getTalkerById = require('./routes/getTalkerById');
const login = require('./routes/login');
const createTalker = require('./routes/createTalker');
const editTalker = require('./routes/editTalker');
const deleteTalker = require('./routes/deleteTalker');
const searchTalker = require('./routes/searchTalker');

const app = express();
app.use(searchTalker);
app.use(bodyParser.json());
app.use(getAllTalkers);
app.use(getTalkerById);
app.use(login);
app.use(createTalker);
app.use(editTalker);
app.use(deleteTalker);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
