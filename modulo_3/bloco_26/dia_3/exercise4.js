const fs = require('fs');

function textwriteFile(fileName, string) {
  fs.writeFileSync(`${__dirname}/${fileName}`, string);
  return 'ok'
}

module.exports = textwriteFile
