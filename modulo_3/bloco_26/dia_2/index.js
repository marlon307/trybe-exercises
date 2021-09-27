const { exercise1 } = require('./exercise1');

async function teste() {
  console.log(await exercise1(2, 15, 3));
}

teste()
