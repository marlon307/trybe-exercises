console.log('////////////// 1');

let numbers = [1, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (var i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
console.log('////////////// 2');
//2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let result = 0;

for (var i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
}

console.log(result);
console.log('////////////// 3');

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let soma = 0;
let value = 0;

for (var i = 0; i < numbers.length; i += 1) {

  soma += numbers[i];
  value += i;
}

result = soma / value;
console.log(result);
console.log('////////////// 4');

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (result > 20) {
  console.log('alor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

console.log('////////////// 5');

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
//
for (var i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);
console.log('////////////// 6');

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
for (var i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }
}

console.log('////////////// 7');
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
//[1, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
var menor = 0;
var position = 0

for (var i = 0; i < numbers.length; i += 1) {
  for (var p = 0; p < i; p += 1) {
    if (numbers[i] < numbers[p]) {
      position = numbers[i];
      menor = numbers[i];
    }
  }
}
console.log(menor);

console.log('////////////// 8');

//8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
var numbersarray = 25;
var array = [];

for (var i = 0; i < numbersarray; i += 1) {
  array.push(i + 1);
}
console.log(array);

console.log('////////////// 9');
//9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

for (var i = 0; i < array.length; i += 1) {
  console.log(array[i] + ' ÷ 2 = ' + array[i] / 2);
}

//console.log('////////////// 9');
//Bonus
