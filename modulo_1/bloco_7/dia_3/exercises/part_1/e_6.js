const assert = require('assert');

//escreva a função addOne aqui

function addOne(arr) {
  let result = [];
  for (let index of arr) {
    result.push(index + 1);
  }
  return result;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

console.log(output);
assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
