const readline = require('readline-sync');

const altura = readline.questionInt('Altura?');
const peso = readline.questionFloat('Peso?');

const icms = () => peso / (altura * 2);

module.exports = {
  icms
}
