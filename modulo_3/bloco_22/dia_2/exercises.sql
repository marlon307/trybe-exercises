-- Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
db.superheroes.count();
-- Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
db.superheroes.find({ 'aspects.height': { $lt: 180 }});