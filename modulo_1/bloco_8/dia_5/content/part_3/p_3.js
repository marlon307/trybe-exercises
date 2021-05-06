const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const {
  name,
  seller
} = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas// Smart TV Crystal UHD

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {
  a: names,
  b: classAssigned,
  c: subject
} = student;

console.log(names); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

const printProductDetails = ({
  name,
  price,
  seller
}) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
