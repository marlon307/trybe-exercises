--https://app.betrybe.com/course/back-end/introducao-ao-mongodb/mongodb-introducao/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d/exercicios/8fdaa631-7a16-4a1e-b8a5-2b1d0640e57d/agora-a-pratica/c3521329-81d6-451c-abaf-a0e975db2595?use_case=side_bar


-- Exercício 1 : Retorne o documento com o _id igual a 8.
db.bios.find({ _id: 8 });
-- Exercício 2 : Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name .
db.bios.find({ _id: 8 }, { _id: 1, name: 1 });
-- Exercício 3 : Retorne apenas os atributos name e birth do documento com o _id igual a 8.
db.bios.find({ _id: 8}, { _id: 0, name: 1, birth: 1 });
-- Exercício 4 : Retorne todos os documentos em que o atributo name.first seja igual a John , utilizando o método pretty() .
db.bios.find({ 'name.first': 'John' }).pretty();
-- Exercício 5 : Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty() .
db.bios.find().limit(3).pretty();
-- Exercício 6 : Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
db.bios.find().limit(2).skip(5).pretty();


-- mongoimport --db=listbooks --collection=books --file=books-48d15e4d8924badc2308cc4a62eb3ea4.json

-- Exercício 7 : Retorne a quantidade de documentos da coleção books .
db.books.count();
-- Exercício 8 : Conte quantos livros existem com o status = "PUBLISH" .
db.books.find({ status: "PUBLISH" }).count();
