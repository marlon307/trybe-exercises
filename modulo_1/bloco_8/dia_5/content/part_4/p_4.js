const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada



const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacao] = saudacoes;

console.log(saudacao); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let newArray = [comida, animal, bebida];

let [first, second, terc] = newArray;

console.log(terc, first, second); // arroz gato água

////////////////////////////////////

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
const par = (param) => (param.filter((elem) => (elem % 2) === 0));


console.log(par(numerosPares)); // [6, 8, 10, 12]
