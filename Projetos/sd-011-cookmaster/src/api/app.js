const express = require('express');
const routeUser = require('./routes/routeUsers');
const routerLogin = require('./routes/routerLogin');
const routerRecipies = require('./routes/recipesRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', routeUser);

app.use('/login', routerLogin);

app.use('/recipes', routerRecipies);

app.use('/images', express.static(`${__dirname}/../uploads`));

module.exports = app;
