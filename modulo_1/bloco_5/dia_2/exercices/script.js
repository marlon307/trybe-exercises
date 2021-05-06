//1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
function creatElement(element, cls) {
  let creatElem = document.createElement(element);
  creatElem.classList.add(cls);
  return document.body.appendChild(creatElem);
}

function AddTextClass(clss, text) {
  let getElem = document.querySelector(clss);
  return getElem.innerText = text;
}

creatElement('h1', 'title');
AddTextClass('.title', 'Exercício 5.2 - JavaScript DOM como filho da tag body');

function insertChild(pai, nameFilho, element) {
  let getP = document.querySelector(pai);
  let creatElemChild = document.createElement(element);
  creatElemChild.classList.add(nameFilho);
  return getP.appendChild(creatElemChild);
}

function addImgClass(Insetclss, imgClss, url) {
  let getClass = document.querySelector(Insetclss);
  let creatElem = document.createElement('img');
  creatElem.classList.add(imgClss);
  creatElem.src = url;
  getClass.appendChild(creatElem);
}

function creatList(clssloc, qtd) {
  for (let index = 0; index < qtd; index += 1) {
    insertChild(clssloc, 'listIt' + index, 'li');
    AddTextClass('.listIt' + index, index + 1);
  }
}

function Centralize(clss) {
  let getElem = document.querySelector(clss);
  console.log(getElem);
  return getElem.style.margin = '0 auto';
}

function Remove(classPai, indexFilho) {
  let removeClss = document.querySelector(classPai);
  return removeClss.removeChild(removeClss.childNodes[indexFilho]);
}

function ColorCointain(clss) {
  let getElem = document.querySelector(clss);
  console.log(getElem);
  return getElem.style.background = 'green';
}

//2 - Adicione a tag div com a classe main-content como filho da tag body;
creatElement('div', 'main-content');

//3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
insertChild('.main-content', 'center-content', 'div')

//4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
insertChild('.center-content', 'paragraph', 'p');
AddTextClass('.paragraph', 'Exercício 5.2 - JavaScript DOM como filho da tag body');

//5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
insertChild('.main-content', 'left-content', 'div');

//6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
insertChild('.main-content', 'right-content', 'div');

//7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
addImgClass('.left-content', 'small-image', 'https://picsum.photos/200');

//8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
insertChild('.right-content', 'list', 'ul');
creatList('.list', 10)

//9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
insertChild('.main-content', 'description', 'h3');
insertChild('.main-content', 'description', 'h3');
insertChild('.main-content', 'description', 'h3');


//10- Adicione a classe title na tag h1 criada;
//OK
//11 - Adicione a classe description nas 3 tags h3 criadas;
//OK
//12 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
Remove('.main-content', '1');

//13 - Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
Centralize('.right-content');

//14 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
ColorCointain('.center-content');

//15 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
Remove('.list', '9');
Remove('.list', '8');
