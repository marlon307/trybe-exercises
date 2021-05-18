const techList = (array, nameStr) => {
  let newArray = [];
  // console.log(array === []);
  if (array.length === 0) return 'Vazio!';

  array.forEach((element) => {
    newArray.push({
      tech: element,
      name: nameStr,
    })
  });

  newArray.sort((a, b) => {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  })
  return newArray;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = {
  techList,
}
