const { expect } = require('@jest/globals');
let { randNumber } = require('./e_1-2-3');
let { uppercaseLetter, firsrtUppcLetter, concatString } = require('./e_4');

describe('Teste Unitario', () => {
  test('Exercise 1', () => {
    randNumber = jest.fn().mockReturnValue(10);

    expect(randNumber()).toBe(10);
    expect(randNumber).toHaveBeenCalled();
  })
  test('Exercise 2', () => {
    randNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(randNumber(6, 2)).toBe(3);
    expect(randNumber).toHaveBeenCalled();
    expect(randNumber).toHaveBeenCalledTimes(1);
  })
  test('Exercise 3', () => {
    randNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randNumber(2, 3, 5)).toBe(30);

    randNumber.mockReset();
    randNumber = jest.fn().mockReturnValue(10);

    expect(randNumber()).toBe(10);
    expect(randNumber).toHaveBeenCalled();
    expect(randNumber).toHaveBeenCalledTimes(1);
  })
  test('Exercise 4', () => {
    uppercaseLetter = jest.fn().mockImplementation((str) => str.toLowerCase());
    expect(uppercaseLetter('TESTE')).toBe('teste');

    firsrtUppcLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
    expect(firsrtUppcLetter('teste')).toBe('e');

    concatString = jest.fn().mockImplementation((param1, param2, param3) => `${param1} ${param2} ${param3}`);
    expect(concatString('teste1', 'teste2', 'teste3')).toBe('teste1 teste2 teste3');
  })
  test('Exercise 5', () => {
    randNumber.mockReset();
    expect(randNumber())
  })
});
