const getForm = document.getElementById('evaluation-form');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const button = document.querySelector('#entrar');
const chkAcept = document.getElementById('agreement');
const btnSubmt = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const contTextlength = document.getElementById('textarea');
const formClose = document.getElementById('formClose');
const getmaxLength = contTextlength.maxLength;
counter.innerText = getmaxLength;

button.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

chkAcept.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    btnSubmt.disabled = false;
  } else {
    btnSubmt.disabled = true;
  }
});

contTextlength.addEventListener('input', (event) => {
  const value = event.target.value.length;
  counter.innerText = getmaxLength - value;
});

function creatParagrph(string) {
  const newElem = document.createElement('p');
  newElem.innerText = string;
  formClose.appendChild(newElem);
}

function creatContext() {
  const getFormData = new FormData(getForm);
  creatParagrph(`Nome: ${getFormData.get('Nome')} ${getFormData.get('sNome')}`);
  creatParagrph(`Email: ${getFormData.get('Email')}`);
  creatParagrph(`Casa: ${getFormData.get('Casa')}`);
  creatParagrph(`Família: ${getFormData.get('family')}`);
  let string = '';
  for (const index of getFormData.entries()) {
    console.log(index[0]);
    if (index[0] === 'Materias') {
      string += ` ${index[1]},`;
    }
  }
  creatParagrph(`Matérias: ${string}`);
  creatParagrph(`Avaliação: ${getFormData.get('rate')}`);
  creatParagrph(`Observações: ${getFormData.get('Observações')}`);
}

btnSubmt.addEventListener('click', (event) => {
  event.preventDefault();
  const getFormData = new FormData(getForm);
  let erro = 0;

  for (const index of getFormData.entries()) {
    if (index[1] === '') {
      erro += 1;
    }
  }
  if (erro === 0) {
    creatContext();
  }
});
