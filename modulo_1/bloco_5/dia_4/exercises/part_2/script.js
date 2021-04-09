const getBody = document.querySelector('body');
const getBgc = document.getElementById('backGround');
const fontColor = document.getElementById('fontColor');
const lineHeight = document.getElementById('lineHeight');
const fontFamily = document.getElementById('fontFamily');
const fontSize = document.getElementById('fontSize');

console.log(localStorage.length);

if (localStorage.length === 0) {
    localStorage.setItem('bg', '#fff');
    localStorage.setItem('fc', '#333');
    localStorage.setItem('lh', '10');
    localStorage.setItem('ff', 'Arial');
    localStorage.setItem('fs', '15');
} else {
    let bGc = localStorage.getItem('bg');
    let cl = localStorage.getItem('fc');
    let lh = localStorage.getItem('lh');
    let ff = localStorage.getItem('ff');
    let fs = localStorage.getItem('fs');

    getBgc.value = bGc;
    getBody.style.background = bGc;

    fontColor.value = cl;
    getBody.style.color = cl;

    lineHeight.value = lh;
    getBody.style.lineHeight = lh;


    getBody.style.fontFamily = ff;
    fontFamily.value = ff;

    getBody.style.fontSize = fs + 'px';
    fontSize.value = fs;
}

console.log(getBgc.id);

function getPropy(event) {
    switch (event.target.id) {
        case getBgc.id: {
            localStorage.setItem('bg', getBgc.value);
            getBody.style.background = getBgc.value;
            break;
        }
        case fontColor.id: {
            localStorage.setItem('fc', fontColor.value);
            getBody.style.color = fontColor.value;
            break;
        }
        case lineHeight.id: {
            localStorage.setItem('lh', lineHeight.value);
            getBody.style.lineHeight = lineHeight.value;
            break;
        }
        case fontSize.id: {
            localStorage.setItem('fs', fontSize.value);
            getBody.style.fontSize = fontSize.value + 'px';
            break;
        }
        case fontFamily.id: {
            localStorage.setItem('ff', fontFamily.value);
            getBody.style.fontFamily = fontFamily.value;
            break;
        }
        default: console.log('Aconteceu algo de errado');
    }
}
getBgc.addEventListener('mouseleave', getPropy);
fontColor.addEventListener('mouseleave', getPropy);
lineHeight.addEventListener('keyup', getPropy);
fontSize.addEventListener('keyup', getPropy);
fontFamily.addEventListener('keyup', getPropy);


