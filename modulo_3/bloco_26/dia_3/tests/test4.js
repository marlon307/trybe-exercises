const { expect } = require('chai');

const textwriteFile = require('../exercise4');

describe('Exercisio 4', () => {
  it('Escreva ok', () => {
    const write = textwriteFile('text.txt', 'texto');
    expect(write).to.be.a('string')
  })
  it('Return ok', () => {
    const write = textwriteFile('text.txt', 'texto');
    expect(write).to.be.equals('ok')
  })
});
