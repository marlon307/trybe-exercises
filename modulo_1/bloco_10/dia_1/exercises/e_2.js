const techList = (array, nameStr) => {
  if (array.length === 0) return 'Vazio!';
  let newArray = [];
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
