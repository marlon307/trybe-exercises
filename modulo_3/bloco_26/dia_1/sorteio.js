const readline = require('readline-sync');

const sorteio = () => {
  const randon = Math.floor(Math.random() * 10);
  const value = readline.questionInt('Digite um numero de 0 a 10. ')

  console.log(
    randon === value ?
    'Parabéns, número correto!' :
    `"Opa, não foi dessa vez. O número era ${randon}`
  )

  const restart = readline.question('Deseja jogar novamente? (s / n) ')
  if (restart === 's') sorteio();
};

sorteio();
