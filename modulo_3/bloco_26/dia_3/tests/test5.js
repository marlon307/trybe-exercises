const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const resultRequired = 'texto';
const { textwriteFile, lerArquivo } = require('../exercise4');

describe('Exercises', () => {
  describe('Exercise 4', () => {

    before(() => {
      sinon.stub(fs, 'writeFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('Resultado', () => {
      it('Escreva ok', () => {
        const write = textwriteFile('text.txt', resultRequired);
        expect(write).to.be.a('string')
      })

      it('Return ok', () => {
        const write = textwriteFile('text.txt', resultRequired);
        expect(write).to.be.equals('ok')
      })
    })
  });

  describe('Exercise 5', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('Resultado', () => {
      it('deve ser igual a "null"', () => {
        const resulRead = lerArquivo('arquivo_que_nao_existe.txt');

        expect(resulRead).to.be.equal(null);
      })
    })
  })
});
