function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

console.log('///////');

const arrow = (bool) => {
  const part1 = 'Não devo ser utilizada fora do meu escopo (if)';
  const part2 = 'Não devo ser utilizada fora meu escopo (else)';
  let result = (bool) ? `${part1} o que estou fazendo aqui ? :O` : `${part2} o que estou fazendo aqui ? :O`;
  console.log(result);
}

arrow(true);

console.log('///////');

//https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores

const oddsAndEvens = [13, 3, 4, 10, 7, 2].sort((a, b) => a - b);

console.log(oddsAndEvens);
