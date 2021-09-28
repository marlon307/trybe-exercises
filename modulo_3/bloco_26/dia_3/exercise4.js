const { writeFileSync, readFile, existsSync } = require('fs');

function textwriteFile(fileName, string) {
  writeFileSync(`./${fileName}`, string);
  return 'ok';
}

function lerArquivo(fileName) {

  if (existsSync(`./${fileName}`)) {
    readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    return 'ok'
  } else {
    return null;
  }
}

module.exports = {
  textwriteFile,
  lerArquivo
}
