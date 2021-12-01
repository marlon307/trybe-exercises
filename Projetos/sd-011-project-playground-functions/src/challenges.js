// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4

function concatName(arr) {
  return arr[arr.length - 1].concat(', ', arr[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function Repeat(nIndx, n) {
  let repeat = 0;

  for (let index = 0; index < nIndx.length; index += 1) {
    if (nIndx[index] === n) {
      repeat += 1;
    }
  }
  return repeat;
}

function highestCount(arrNumber) {
  let nMaior = 0;
  let qRepeat = 0;

  for (let i = 0; i < arrNumber.length; i += 1) {
    if (arrNumber[i] >= nMaior) {
      nMaior = arrNumber[i];
    }
  }
  qRepeat = Repeat(arrNumber, nMaior);

  return qRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let finish;
  let calc1 = Math.abs(cat1 - mouse);
  let calc2 = Math.abs(cat2 - mouse);

  if (calc1 > calc2) {
    finish = 'cat2';
  } else if (calc2 > calc1) {
    finish = 'cat1';
  } else {
    finish = 'os gatos trombam e o rato foge';
  }
  return finish;
}

// Desafio 8
function checkFb(num) {
  let result;
  if ((num % 15) === 0) {
    result = 'fizzBuzz';
  } else if ((num % 3) === 0) {
    result = 'fizz';
  } else if ((num % 5) === 0) {
    result = 'buzz';
  } else result = 'bug!';
  return result;
}

function fizzBuzz(number) {
  let result = [];

  for (let index = 0; index < number.length; index += 1) {
    result.push(checkFb(number[index]));
  }
  return result;
}

// Desafio 9
function retunrArr(s) {
  let arr = [];

  for (let index of s) {
    arr.push(index);
  }
  return arr;
}

function vogal(l, bool) {
  let vog;

  if (bool === true) {
    vog = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  } else if (bool === false) {
    vog = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  }
  for (let vIndex in vog) {
    if (vog[vIndex] === l) {
      return vIndex;
    }
  }
  return false;
}

function encode(string) {
  let str = retunrArr(string);
  let nStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (vogal(str[index], true) > 0) {
      str[index] = vogal(str[index], true);
    }
    nStr += str[index];
  }
  return nStr;
}

function decode(string) {
  let str = retunrArr(string);
  let nStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (vogal(str[index], false) !== false) {
      str[index] = vogal((str[index]), false);
    }
    nStr += str[index];
  }
  return nStr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
