const { writeFileSync, readFile, existsSync } = require('fs');

function textwriteFile(fileName, string) {
  writeFileSync(`./${fileName}`, string);
  return 'ok';
}

module.exports = {
  textwriteFile,
}
