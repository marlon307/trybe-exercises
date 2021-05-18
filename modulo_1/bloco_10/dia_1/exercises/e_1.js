function retunrArr(string) {
  let arr = [];

  for (let index of string) {
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

console.log(encode('aeiou'));
console.log(decode('12345'));

module.exports = {
  encode,
  decode
}
