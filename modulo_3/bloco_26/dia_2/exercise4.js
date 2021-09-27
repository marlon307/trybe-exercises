const simpsons = require('./simpsons.json')

// function getAllPesronage() {
//   simpsons.map(({ id, name }) => console.log(`${id} - ${name}`))
// }

// getAllPesronage()

function getPesronageId(id) {
  return new Promise((resolve, reject) => {
    if (id - 1 > simpsons.length || id <= 0)
      reject(new Error('ID inexistente'))

    resolve(simpsons[(id - 1).toString()]);
  })
}

getPesronageId(5)
  .then(({ id, name }) => console.log(`${id} - ${name}`))
  .catch((err) => console.log(err.message));
