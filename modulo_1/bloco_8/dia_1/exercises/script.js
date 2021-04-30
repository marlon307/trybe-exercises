const creatUser = (nomeCompleto) => {
  return `Nome: ${nomeCompleto} E-mail: ${nomeCompleto.replace(' ', '').toLowerCase()}@trybe.com`;
}

const newEmployees = (block) => {
  const employees = {
    id1: block('Pedro Guerra'),
    id2: block('Luiza Drumond'),
    id3: block('Carla Paiva'),
  };
  return employees;
};

//console.log(creatUser('marlon'));
console.log(newEmployees(creatUser));


const rand = (number) => {
  return Math.round(Math.random(number) * number);
}

const sorteio = (number, callback) => {
  let result = false;
  if (number === callback(5)) result = true;
  return result ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(3, rand));
