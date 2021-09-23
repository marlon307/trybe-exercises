const readline = require('readline-sync');

const altura = readline.questionInt('Altura?');
const peso = readline.questionFloat('Peso?');

const imc = () => peso / Math.pow(altura / 100, 2).toFixed(2);

console.log(imc());
