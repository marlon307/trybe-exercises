const express = require('express');
const routerLogin = require('./routes/routerLogin')

const app = express();

app.use(express.json());

app.use('/login', routerLogin);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
