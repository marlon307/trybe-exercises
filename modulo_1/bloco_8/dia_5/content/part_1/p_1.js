// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Uva', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Manga', 'Morango', 'Mexerica'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
