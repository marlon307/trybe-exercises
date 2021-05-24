const { expect, it } = require('@jest/globals');
const { uppercase, testeText } = require('./e_1');
const { getUserName } = require('./e_2-3');
const { getRepos } = require('./e_4');

describe('Testes', () => {
  it('Check UpperCase', () => {
    const data = uppercase('Texto', testeText)
    return expect(data).toEqual('TEXTO');
  });

  it('getUserName ID', () => {
    expect.assertions(1);
    getUserName(5).then((date) => expect(date).toBe('Paul'));
  });

  it('getRepos 4', () => {
    // expect.assertions(1);
    // toBe(true)
    // --

    getRepos().then(date => expect(date.some((filt) => filt === 'sd-01-week4-5-project-todo-list')).toBeTruthy());
  });
});
