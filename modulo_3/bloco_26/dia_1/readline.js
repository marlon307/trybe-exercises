const readline = require('readline-sync');

const name = readline.question('Qual sua altura?')
const age = readline.question('Qual seu peso?');

console.log(`Hello, ${name}! You are ${age} years old!`);
