const { expect } = require('@jest/globals');
let { randNumber } = require('./e_1-2');

describe('Teste Unitario', () => {
  test('Exercice 1', () => {
    randNumber = jest.fn().mockReturnValue(10);

    randNumber();
    expect(randNumber).toHaveBeenCalled();
    expect(randNumber()).toBe(10);
  })
  test('Exercice 2', () => {
    randNumber = jest.fn().mockImplementation((a, b) => a / b);

    randNumber();
    expect(randNumber).toHaveBeenCalled();
    expect(randNumber).toHaveBeenCalledTimes(1);
    expect(randNumber(6, 2)).toBe(3);
  })
  test('Exercice 3', () => {
    randNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    randNumber();
    expect(randNumber).toHaveBeenCalled();
    expect(randNumber).toHaveBeenCalledTimes(1);
    expect(randNumber(6, 2)).toBe(3);
  })
});
