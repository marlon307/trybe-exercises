const textInput = document.getElementById('text-input');
const memeImagecont = document.getElementById('meme-image-container');
const paragraph = document.getElementById('meme-text');
const imgUpload = document.getElementById('meme-insert');
const imgLoad = document.getElementById('meme-image');
const modBtnLoad = document.getElementById('mods');
const panMemes = document.getElementById('memesdefault');

textInput.addEventListener('input', () => {
  paragraph.innerText = textInput.value;
});

imgUpload.addEventListener('change', (event) => {
  imgLoad.src = URL.createObjectURL(event.target.files[0]);
});

modBtnLoad.addEventListener('click', (event) => {
  switch (event.target.classList[1]) {
  case 'red': {
    memeImagecont.style.border = `3px dashed ${event.target.classList[1]}`;
    break;
  }
  case 'blue': {
    memeImagecont.style.border = `5px double ${event.target.classList[1]}`;
    break;
  }
  case 'green': {
    memeImagecont.style.border = `6px groove ${event.target.classList[1]}`;
    break;
  }
  default:
  }
});

panMemes.addEventListener('click', (event) => {
  console.log(event.target.src);
  imgLoad.src = event.target.src;
});
