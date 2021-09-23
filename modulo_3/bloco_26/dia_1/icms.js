const readline = require('readline-sync');

const altura = readline.questionInt('Altura?');
const peso = readline.questionFloat('Peso?');

const icms = () => peso / Math.pow(altura / 100, 2).toFixed(2);


module.exports = {
  icms
}
