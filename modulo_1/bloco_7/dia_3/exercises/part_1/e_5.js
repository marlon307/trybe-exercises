const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Titli',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj3, 'Não são iguais');
assert.deepStrictEqual(obj1, obj2, 'Não são iguais');
// implemente seus testes aqui
