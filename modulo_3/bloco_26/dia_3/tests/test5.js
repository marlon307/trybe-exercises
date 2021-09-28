const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const { textwriteFile } = require('../exercise4');

describe('Executa a função textwriteFile', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = textwriteFile('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = textwriteFile('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});
