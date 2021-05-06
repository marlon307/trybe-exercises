const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const Result = (obj) => {
  const ObjKey = Object.keys(obj);
  for (let index in ObjKey) {
    console.log(`${ObjKey[index]}: ${obj[ObjKey[index]]}`);
  }
};

Result(student1);
console.log('//////////////');
Result(student2);
