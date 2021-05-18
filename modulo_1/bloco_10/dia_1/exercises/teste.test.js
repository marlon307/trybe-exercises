const { encode, decode } = require('./e_1');

describe('Testa se retorna 12345 - aeiou', () => {
  it('Check 12345', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('Check aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('Check tamnho da string', () => {
    expect(decode('12345').length).toBe(5);
  })
  it('Check tamnho da string', () => {
    expect(encode('aeiou').length).toBe(5);
  })
});

const { techList } = require('./e_2');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([{
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
