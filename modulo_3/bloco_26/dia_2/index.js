const { exercise1 } = require('./exercise1');


const random1 = Math.floor(Math.random() * 100 + 1);
const random2 = Math.floor(Math.random() * 100 + 1);
const random3 = Math.floor(Math.random() * 100 + 1);

exercise1(random1, random2, random3)
  .then((result) => console.log(`sucesso ${result}`))
  .catch((err) => console.log(`error ${err.message}`));
