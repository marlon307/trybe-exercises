const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia? ');
const tempo = readline.questionInt('Qual o tempo? ');

const velocidade = () => distancia / tempo;

console.log('Velocidade ' + velocidade());
