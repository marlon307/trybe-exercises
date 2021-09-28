const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const { textwriteFile, lerArquivo } = require('../exercise4');

const resultRequired = 'texto';


describe('Quando o arquivo não existe', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync')
      .throws(new Error('Arquivo não encontrado'));
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta é', () => {
    it('é uma "string"', () => {
      const resposta = textwriteFile('text.txt', resultRequired);

      expect(resposta).to.be.a('string');
    });

    it('igual a "null"', () => {
      const resulRead = lerArquivo('arquivo_que_nao_existe.txt');

      expect(resulRead).to.be.equal(null);
    })
  })
});
