const fetch = require('node-fetch');

const getRepos = () => {
  return fetch('https://api.github.com/orgs/tryber/repos')
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// getRepos().then(e => console.log(e.filter(ele => ele === 'sd-01-week4-5-project-todo-list')));

module.exports = {
  getRepos,
}
