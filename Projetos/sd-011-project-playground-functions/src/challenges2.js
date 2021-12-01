// Desafio 10
function techList(arr, nm) {
  let newArr = [];

  if (arr.length > 0) {
    for (let index of arr.sort()) {
      newArr.push({ tech: index, name: nm });
    }
  } else return 'Vazio!';
  return newArr;
}

// Desafio 11 Regex Retirado https://gist.github.com/knoonrx/a180f0b7e3039e42c621
function Repeat(nIndx, n) {
  let repeat = 0;
  for (let index = 0; index < nIndx.length; index += 1) {
    if (nIndx[index] === n) {
      repeat += 1;
    }
  }
  return repeat;
}

function checkNum(n) {
  for (let index of n) {
    if (index < 0 || index > 9 || Repeat(n, index) > 2) {
      return true;
    }
  }
}

// Regex retiradohttps://gist.github.com/knoonrx/a180f0b7e3039e42c621
function generatePhoneNumber(nPhone) {
  let response = '';
  let RegExp = /(\d{2})(\d{5})(\d{4})/;

  if (nPhone.length !== 11) {
    response = 'Array com tamanho incorreto.';
  } else if (checkNum(nPhone) === true) {
    response = 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let index of nPhone) {
      response = response.concat(index);
    }
    response = response.replace(RegExp, '($1) $2-$3');
  }
  return response;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let Angle1 = Math.abs(lineA + lineB);
  let Angle2 = Math.abs(lineA - lineB);
  let value = false;

  if (lineC < Angle1 && lineC > Angle2) {
    value = true;
  } else if (Angle1 < lineC && Angle2 > lineC) {
    value = false;
  }
  return value;
}

// Desafio 13
// Regex tirado do https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
function hydrate(string) {
  let RegExp = /([^\d])+/gim;
  let newStr = string.replace(RegExp, '');
  let result = 0;

  for (let index of newStr) {
    result += Number(index);
  }

  if (result > 1) {
    result += ' copos de água';
  } else {
    result += ' copo de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
