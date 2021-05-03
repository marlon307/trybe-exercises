console.log('//////////// 1');

function checkPalindromo(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse == string) return true;
  return false;
}

checkPalindromo('arara');

console.log('//////////// 2');
let numbers = [2, 3, 50, 6, 7, 10, 1, -3, 70];

function bigNumber(number) {
  let newNumb = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > newNumb) {
      newNumb = number[i];
    }
  }
  console.log(newNumb);
}

bigNumber(numbers);
console.log('//////////// 3');

function lowNumber(number) {
  let newNumb = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] < newNumb) {
      newNumb = number[i];
    }
  }
  console.log(newNumb);
}

lowNumber(numbers);

console.log('//////////// 4');

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function bigName(name) {
  let nameLength = 0;
  let newName = '';
  for (let i = 0; i < name.length; i += 1) {
    if (name[i].length > nameLength) {
      nameLength = name[i].length;
      newName = name[i];
    }
  }
  console.log(newName);
}

bigName(names);

console.log('//////////// 5');

let nbRepeat = [2, 3, 2, 5, 8, 2, 3];

function repeat(check) {
  let qtRepeat = [];
  let result = 0;
  for (let i = 0; i < check.length; i += 1) {
    for (let ni = 0; ni < i; ni += 1) {
      if (check[i + 1] == check[ni]) {
        qtRepeat.push(check[ni]);
        for (let x = 0; x < qtRepeat.length; x += 1) {
          if (qtRepeat[ni] >= result) {
            result = qtRepeat[ni];
          }
        }
      }
    }
  }
  console.log(result);
}

repeat(nbRepeat);

console.log('//////////// 6');

function numberInt(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  console.log(result);
}
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
numberInt(5);

console.log('//////////// 7');

function checkString(word, ending) {
  let e = ending.length;
  let w = word.length - 1;
  let str = '';
  for (w; w > e; w -= 1) {
    str += word[w];
    if (str.split('').reverse().join('') == ending) {
      return true;
    }
  }
  return false
}

console.log(checkString('trybe', 'be'));
