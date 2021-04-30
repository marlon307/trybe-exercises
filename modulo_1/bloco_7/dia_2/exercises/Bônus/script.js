const students = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

const checkAlunMat = (obj, mat) => {
  let result = 0;
  for (let index in obj) {
    if (obj[index].materia === mat) {
      result += Number(obj[index].numeroEstudantes);
    }
  }
  return result;
}

console.log(checkAlunMat(students, 'Matemática'));
