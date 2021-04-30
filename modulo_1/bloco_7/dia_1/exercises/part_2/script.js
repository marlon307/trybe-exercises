const button = document.getElementById('btn');
//Fatorial
const countNumber = n => n < 1 ? n = 1 : n * countNumber(n - 1);

console.log(countNumber(3));

console.log('/////////');

const text = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const maxString = (string) => {
  let array = []
  array = string.split(' ');
  let result = 0;
  let maxStr = '';

  array.forEach((element) => {
    let count = element.length;
    if (count > result) {
      result = count;
      maxStr = element;
    }
  });

  return maxStr;
}

console.log(maxString(text));

console.log('//////////');

let value = 1;

button.addEventListener('click', (event) => {
  value += 1;
  event.target.innerText = `Click ${value}`;
});


const CheckX = (letSubst, text, string) => string.replace(letSubst, text);

console.log(CheckX('x', 'Bebeto', 'Tryber x aqui!'));

const mofify = CheckX('x', 'Bebeto', 'Tryber x aqui!');

const skills = (string, array) => {
  const str = `${string} Minhas cinco principais habilidades são:`;
  let newSkills = '';
  array.forEach((textArrId) => {
    newSkills += `\n ${textArrId}`;
  });
  return str + newSkills;
}

console.log(skills(mofify, ['JavaScript', 'HTML', 'CSS', 'REACT', 'NODE.JS']));
