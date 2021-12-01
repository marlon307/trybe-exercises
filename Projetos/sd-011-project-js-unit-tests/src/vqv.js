/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  let result;
  if (nome !== undefined || idade !== undefined) {
    nome = `Oi, meu nome é ${nome}!\n`;
    idade = `Tenho ${idade} anos,\n`;
    result = `${nome}${idade}trabalho na Trybe e mando muito em programação!\n#VQV!`;
  } else {
    return undefined;
  }
  return result;
};

console.log(vqv());

module.exports = vqv;
