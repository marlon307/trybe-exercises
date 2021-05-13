// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const creatParagraph = (text) => {
  const creali = document.createElement('li');
  const getDiv = document.getElementById('paragraph');
  creali.innerText = text;
  getDiv.appendChild(creali);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  return new Promise((resolver, reject) => {
    fetch(API_URL, myObject)
      .then(response => response.json()
        .then((data) => {
          creatParagraph(data.joke);
          resolver();
        }).catch((error) => reject(error))
      );
  })
};

const creatPiada = async () => {
  await fetchJoke();
  await fetchJoke();
  await fetchJoke();
  await fetchJoke();
}

window.onload = () => creatPiada();
