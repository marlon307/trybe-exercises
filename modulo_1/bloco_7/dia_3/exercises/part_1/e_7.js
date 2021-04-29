const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (array) => {
  let result = 0;
  for (let index of array) {
    result += index;
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

console.log(output);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
