const { expect } = require('chai');
const { checkNumber } = require('../exercise1-2-3')

describe('Executando testes exercisio 1', () => {
  it('Retorne positivo', () => {
    const result = checkNumber(5);
    expect(result).to.be.equals('positivo')
  })
  it('Retorne negativo', () => {
    const result = checkNumber(-2);
    expect(result).to.be.equals('negativo')
  })
  it('Retorne neutro', () => {
    const result = checkNumber(0);
    expect(result).to.be.equals('neutro')
  })
  it('Retorne Erro', () => {
    const result = checkNumber('ds');
    expect(result).to.be.equals('number')
  })
})
