const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  // escreva seu código aqui
  const newArr = names.reduce((ac, e) => ac + e).split('');
  const repeatArr = newArr.filter((letter) => letter.toLocaleLowerCase() === 'a').length;
  return repeatArr;
}

console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
