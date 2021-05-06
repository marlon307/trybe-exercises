const formulario = document.getElementById('form');
const getButton = document.getElementById('btnpost');
const getResume = document.getElementById('resume');

const state = [
  'AC, Acre',
  'AL, Alagoas',
  'AP, Amapá',
  'AM, Amazonas',
  'BA, Bahia',
  'CE, Ceará',
  'DF, Distrito Federal',
  'ES, Espirito Santo',
  'GO, Goiás',
  'MA, Maranhão',
  'MS, Mato Grosso do Sul',
  'MT, Mato Grosso',
  'MG, Minas Gerais',
  'PA, Pará',
  'PB, Paraíba',
  'PR, Paraná',
  'PE, Pernambuco',
  'PI, Piauí',
  'RJ, Rio de Janeiro',
  'RN, Rio Grande do Norte',
  'RS, Rio Grande do Sul',
  'RO, Rondônia',
  'RR, Roraima',
  'SC, Santa Catarina',
  'SP, São Paulo',
  'SE, Sergipe',
  'TO, Tocantins',
];

state.forEach((state) => {
  const creatElem = document.createElement('option');
  creatElem.innerText = state;
  estate.appendChild(creatElem);
});

getButton.addEventListener('click', (event) => {
  event.preventDefault();
  const getForm = new FormData(formulario);
  let inputClear = 0;

  for (let index of getForm.entries()) {
    if (index[1] === '') {
      inputClear += 1;
    }
  };

  if (inputClear === 0) {
    for (let index of getForm.entries()) {
      const creatElem = document.createElement('p');
      creatElem.innerText = `${index[0]}: ${index[1]}`;
      getResume.appendChild(creatElem);
    }
  } else {
    alert('Preencha os capos obrigatorios com ( * )');
  }
});
