const { readFile, writeFile } = require('fs').promises;



function getPesronageId(id) {
  return new Promise((resolve, reject) => {
    if (id - 1 > simpsons.length || id <= 0)
      reject(new Error('ID inexistente'))

    resolve(simpsons[(id - 1).toString()]);
  })
}


// getPesronageId(5);

function newFamily() {
  readFile('./simpsons.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataArray = JSON.parse(data);

    const newDataArray = dataArray.filter(({ id }) => id === '4' || id === '1');

    writeFile('./simpsonFamily.json', JSON.stringify(newDataArray), (err) => {
      if (err) throw new Error('Errona escrita do arquivo');
      console.log('Sucesso!');
    })
  });
}

// newFamily();

function addPeronage(name) {
  const getArray = require('./simpsonFamily.json');
  let newId = 0;

  getArray.forEach(({ id }) => {
    newId = Number(id) + 1;
  })

  const newObject = {
    id: String(newId),
    name
  }

  console.log(newObject);

  writeFile('./simpsonFamily.json', JSON.stringify([...getArray, newObject]), (err) => {
    if (err) throw new Error('Errona escrita do arquivo');
    console.log('Sucesso!');
  })
}

// addPeronage('Teste')

async function alterNamePeronage(name) {
  await readFile('./simpsonFamily.json', 'utf-8')
    .then((array) => JSON.parse(array))
    .then((objectName) => objectName.filter((afterName) => afterName.name !== name))
    .then((simpsomName) => simpsomName.concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((newArray) => writeFile('./simpsonFamily.json', JSON.stringify(newArray)))
}

alterNamePeronage('Teste');
