function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function genratedezDaysList() {
  const days = document.getElementById('days');
  dezDaysList.forEach((index) => {
    const creatDay = document.createElement('li');
    creatDay.classList.add('day');
    if (index === 24 || index === 25 || index === 31) {
      creatDay.classList.add('holiday');
    }
    if (index === 4 || index === 11 || index === 18 || index === 25) {
      creatDay.classList.add('friday');
    }
    creatDay.innerHTML = index;
    days.appendChild(creatDay);
  });
}


genratedezDaysList();

function creatButt(string, id) {
  const getContainbtn = document.querySelector('.buttons-container');
  const creatbtn = document.createElement('button');
  creatbtn.setAttribute('id', id);
  creatbtn.innerText = string;
  getContainbtn.appendChild(creatbtn);
}

creatButt('Feriados', 'btn-holiday');
var active = false;

function eventClick(event) {
  const nameBtntext = event.target.innerText;
  const getholiday = document.querySelectorAll('.holiday');
  const getfriday = document.querySelectorAll('.friday');
  console.log(nameBtntext);
  let color;
  if (active === false) {
    color = 'rgb(118, 255, 209)';
    active = true;
  } else {
    color = 'rgb(238, 238, 238)';
    active = false;
  }
  if (nameBtntext === 'Feriados') {
    getholiday.forEach((element) => {
      element.style.background = color;
    })
  }
  if (nameBtntext === 'Sexta-feira') {
    getfriday.forEach((element) => {
      element.style.background = color;
    })
  }
}

function addEvents(idBtn) {
  const getId = document.getElementById(idBtn);
  getId.addEventListener('click', eventClick);
}

//3
addEvents('btn-holiday');

//4
creatButt('Sexta-feira', 'btn-friday');

//5
addEvents('btn-friday');

//6
function eventhover(event) {
  let getDay = event.target;
  getDay.style.fontSize = '25px';
}

function addEventsHover(idBtn) {
  const getId = document.getElementById(idBtn);
  getId.addEventListener('mouseover', eventhover);
}

addEventsHover('days');

function eventleave(event) {
  let getDay = event.target;
  getDay.style.fontSize = '20px';
}

function addEventsLeave(idBtn) {
  const getId = document.querySelectorAll(idBtn);
  getId.forEach((elem) => {
    elem.addEventListener('mouseleave', eventleave);
  });
}

addEventsLeave('.day');

//7
function addTarefa(string) {
  let getElem = document.querySelector('.my-tasks');
  let creatTaref = document.createElement('span');
  creatTaref.innerText = string;
  getElem.appendChild(creatTaref);
}

addTarefa('Aviso teste 1');

//8
function addTask(color) {
  let getElem = document.querySelector('.my-tasks');
  let creatElem = document.createElement('div');
  creatElem.classList = 'task';
  creatElem.style.background = color;
  getElem.appendChild(creatElem);
}

addTask('red');
addTask('blue');

//9
function setTaskselect(event) {
  let getTask = event.target;
  if (getTask.className === 'task') {
    getTask.classList.add('selected');
  } else {
    getTask.classList.remove('selected');
  }
}

function loadTask() {
  let getTask = document.querySelectorAll('.task');

  getTask.forEach((addev) => {
    addev.addEventListener('click', setTaskselect);
  })
}

loadTask();

//10
function AddcolorDay(event) {
  let getDay = event.target;
  let targetfColor = document.querySelector('.selected');
  if (getDay.style.color === targetfColor.style.backgroundColor) {
    getDay.style.color = 'rgb(119,119,119)'
  } else if (targetfColor !== null) {
    getDay.style.color = targetfColor.style.backgroundColor;
  }
}

function addTarefClick(idBtn) {
  const getId = document.getElementById(idBtn);
  getId.addEventListener('click', AddcolorDay);
}
addTarefClick('days')
