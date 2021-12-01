const express = require('express');
const productsRouter = require('./routes/productRouter');
const salesRouter = require('./routes/salesRouter');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);

app.use('/sales', salesRouter);

app.listen(3000, () => {
  console.log('Server started http://localhost:3000');
});
