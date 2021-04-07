var elementOvc = document.getElementById('elementoOndeVoceEsta');
elementOvc.parentNode.style.color = '#3535';
elementOvc.firstElementChild.innerText = 'Texto';

var elementpai = document.getElementById('pai'); 

console.log(elementpai.firstElementChild);

console.log(elementOvc.previousElementSibling);

console.log(elementOvc.nextSibling);

console.log(elementOvc.nextElementSibling);

console.log(elementpai.children[2]);
