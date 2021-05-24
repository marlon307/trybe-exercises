const uppercase = (str, callback) => callback(str.toUpperCase());
const testeText = (str) => str;

// console.log(uppercase('Texto', testeText));

module.exports = {
  uppercase,
  testeText,
}
