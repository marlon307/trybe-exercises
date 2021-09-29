const { writeFileSync } = require('fs');

function textwriteFile(fileName, string) {
  writeFileSync(`./${fileName}`, string);
  return 'ok';
}

module.exports = {
  textwriteFile,
}
