const fetch = require('node-fetch');

const url = 'https://dog.ceo/api/breeds/image/random';

const fetchFunction = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((object) => object).catch(() => 'Erro');
}

// fetchFunction().then((e) => console.log(e.status));

module.exports = { fetchFunction };
