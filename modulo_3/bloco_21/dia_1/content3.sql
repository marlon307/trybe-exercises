-- Arredondando Valores
-- O arredondamento sempre para cima pode ser feito com o CEIL :
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
-- O arredondamento sempre para baixo pode ser feito com o FLOOR :
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- Exponenciação e Raiz Quadrada
-- Elevando um número X à potência Y usando a função POW :
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
-- Encontrando a raiz quadrada de um valor usando SQRT :
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- Gerando valores aleatórios
SELECT RAND();
SELECT ROUND(7 + (RAND() * 6));