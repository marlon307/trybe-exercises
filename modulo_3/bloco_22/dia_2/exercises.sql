-- Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
db.superheroes.count();
-- Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
db.superheroes.find({ 'aspects.height': { $lt: 180 } });
--Exercício 3: Retorne o total de super-heróis menores que 1.80m.
db.superheroes.find({ 'aspects.height': { $lt: 180 } }).count();
-- Exercício 4: Retorne o total de super-heróis com até 1.80m.
db.superheroes.find({ 'aspects.height': { $lte: 180 } });
-- Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.find({ 'aspects.height': { $gte: 200 } }).limit(2);
-- Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.find({ 'aspects.height': { $gte: 200 } }).count();
-- Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
db.superheroes.find({ 'aspects.eyeColor': { $eq: 'green' } });
-- Exercício 8: Retorne o total de super-heróis com olhos azuis.
db.superheroes.find({ 'aspects.eyeColor': { $eq: 'blue' } }).count();
-- Exercício 9: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.find({ 'aspects.hairColor': { $in: ['black', 'No Hair'] } });
-- Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.find({ 'aspects.hairColor': { $in: ['black', 'No Hair'] } }).count();
-- Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.find({ 'aspects.hairColor': { $nin: ['black', 'No Hair'] } }).count();
-- Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.find({ 'aspects.height': { $not: /^180/ } }).count();
-- Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m .
db.superheroes.find({ $and: [ { race: { $not: /^Human/ } }, { 'aspects.height': { $not: { $gt: 180 } } } ] }).limit(20);
-- 
