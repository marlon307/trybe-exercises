const uppercaseLetter = (string) => string.toUpperCase();
const firsrtUppcLetter = (string) => string[0].toUpperCase() + string.slice(1);
const concatString = (str1, str2) => `${str1} ${str2}`;

module.exports = {
  uppercaseLetter,
  firsrtUppcLetter,
  concatString,
};
