USE hr;
SELECT * FROM jobs;
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(MAX_SALARY) FROM jobs;
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(MAX_SALARY) - MIN(MIN_SALARY) FROM jobs;
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT *, AVG(MAX_SALARY+MIN_SALARY) FROM jobs GROUP BY JOB_ID ORDER BY AVG(MAX_SALARY) DESC;
-- 4 Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(MAX_SALARY) FROM jobs;
-- 5 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(MAX_SALARY), MIN(MIN_SALARY), SUM(MAX_SALARY+MAX_SALARY), ROUND(AVG(MAX_SALARY+MIN_SALARY)) FROM jobs;
-- 6 Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
