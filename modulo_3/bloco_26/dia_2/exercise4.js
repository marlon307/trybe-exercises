const { readFile, writeFile } = require('fs');



function getPesronageId(id) {
  return new Promise((resolve, reject) => {
    if (id - 1 > simpsons.length || id <= 0)
      reject(new Error('ID inexistente'))

    resolve(simpsons[(id - 1).toString()]);
  })
}



// readFile('./simpsons.json', 'utf8', (err, data) => {
//   if (err) throw new Error('Falha na execução do arquivo.');
//   JSON.parse(data).map(({ id, name }) => console.log(`${id} - ${name}`));
// });

// function getPesronageId(id) {
//   readFile('./simpsons.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     const array = JSON.parse(data)[id - 1];
//     console.log(`${array.id} - ${array.name}`);
//   });
// }

// getPesronageId(5);

function newFamily() {
  readFile('./simpsons.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataArray = JSON.parse(data);

    const newDataArray = dataArray.filter(({ id }) => id === '4' || id === '1');

    writeFile('simpsonFamily.json', JSON.stringify(newDataArray), (err) => {
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
