let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (let key in names) {
  console.log('Olá ' + names[key]);
}

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in carro) {
  console.log('Modelo: ' + carro['model'] + ' Marca: ' + carro['manufacturer'] + ' Ano: ' + carro['year']);
}
