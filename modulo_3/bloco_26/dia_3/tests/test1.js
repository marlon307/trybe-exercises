const { expect } = require('chai');
const { checkNumber } = require('../exercise1')

describe('Executando testes exercisio 1', () => {
  it('Retorne positivo', () => {
    const result = checkNumber(5);
    expect(result).equals('positivo')
  })
  it('Retorne negativo', () => {
    const result = checkNumber(-2);
    expect(result).equals('negativo')
  })
  it('Retorne neutro', () => {
    const result = checkNumber(0);
    expect(result).equals('neutro')
  })
})
