const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


/*
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
  // document.getElementById(event.target.id).classList.remove('tech');
  const tech = document.querySelectorAll('.tech');
  tech.forEach((claindx) => {
    claindx.classList.remove('tech');
  });
  document.getElementById(event.target.id).classList.add('tech');
}

function updateText(event) {
  textDiv = document.querySelector('.tech');
  textDiv.innerText = event.target.value;
}

divUm.addEventListener('click', resetText);
divDois.addEventListener('click', resetText);
divTres.addEventListener('click', resetText);
input.addEventListener('keyup', updateText)
myWebpage.addEventListener('click', function () {
  window.open('https://github.com/marlon307', '_blank');
  myWebpage.styles.color = '#335465';
});
myWebpage.addEventListener('mouseover', function () {
  myWebpage.style.color = '#335465';
});

// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
