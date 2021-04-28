const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//1
const AddParamObj = (objAdd, param1, param2) => objAdd[param1] = param2;

AddParamObj(lesson2, 'turno', 'manhã');

console.log(lesson2);
//2
const ListKeys = (obj) => Object.keys(obj);

console.log(ListKeys(lesson1));

//3
console.log(ListKeys(lesson1).length);

//4
const ListValue = (obj) => Object.values(obj);

console.log(ListValue(lesson3));

//5
const ConcatObj = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
});

console.table(ConcatObj);

//6

const totalAlun = (obj) => Object.keys(obj).map(a => obj[a].numeroEstudantes).reduce((a, b) => a + b);

console.log(`Total de alunos: ${totalAlun(ConcatObj)}`);

//7

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson3, 0));

//8

const verifyPair = (obj, param1, param2) => obj[param1] === param2;

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
