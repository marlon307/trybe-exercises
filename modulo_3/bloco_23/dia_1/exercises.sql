
db.exercice241.find();

db.exercice241.insertMany([
  {
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}
]);

-- Exercício 1 : Altere o imdbRating para 7.7 no filme Batman .
db.exercice241.updateOne({ 
  title: 'Batman',
  }, {
  $set: { 
    imdbRating: 7.7,
  } 
});

-- Exercício 2 : Altere budget para 1 no filme Godzilla .

db.exercice241.updateOne({ 
  title: 'Batman' 
}, { 
  $set: { 
    budget: 'Godzilla', 
  } 
});

-- Exercício 3 : Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .

db.exercice241.updateOne({ 
  title: 'Home Alone' 
}, { 
  $set: { 
      imdbRating: 5.5,
      budget: 15
    } 
});

-- Exercício 4 : Aumente em 2 o imdbRating do filme Batman .

db.exercice241.updateOne({ 
  title: 'Batman' 
}, { 
  $inc: { 
      imdbRating: 2,
    } 
});

-- Exercício 5 : Aumente em 5 o budget do filme Home Alone .

db.exercice241.updateOne({ 
  title: 'Home Alone' 
}, { 
  $inc: { 
      budget: 5,
    } 
});

-- Exercício 6 : Multiplique por 4 o imdbRating do filme Batman .

db.exercice241.updateOne({ 
  title: 'Batman' 
}, { 
  $mul: { 
      imdbRating: 4,
    } 
});

-- Exercício 7 : Renomeie o campo budget para estimatedBudget do filme Batman .

db.exercice241.updateOne({ 
  title: 'Batman' 
}, { 
  $rename: { 
      "budget": "estimatedBudget",
    } 
});

-- Exercício 8 : Utilize o operador $min para alterar o budget para 5 do filme Home Alone .

db.exercice241.updateOne({ 
  title: 'Home Alone' 
}, { 
  $min: { 
      budget: 5,
    } 
});

-- Exercício 9 : Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla . Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla .

db.exercice241.updateOne({ 
  title: 'Godzilla' 
}, { 
  $max: { 
      imdbRating: 8.6,
      "category.1": "thriller"
    } 
});

-- Exercício 10 : Utilizando o operador $currentDate , crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone .

db.exercice241.updateOne(
  { title: 'Home Alone' },
  { $currentDate: {
      "lastUpdated": { $type: "timestamp" }
    }
  }
);

-- Exercício 11 : Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.


db.exercice241.updateMany(
  { },
  { $set: {
      sequels: 0
    }
  }
);

-- Exercício 12 : Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.


db.exercice241.updateMany(
  { },
  { $unset: {
      budget: 0, 
      estimatedBudget: 0
    }
  }
);


-- Exercício 13 : Para os filmes Batman ou Home Alone , atribua a imdbRating o valor 17 , caso o valor de imdbRating seja menor que 17 .


db.exercice241.updateMany(
  { title: { $in: ['Batman', 'Home Alone'] } },
  { $max: {
      imdbRating: 17, 
    }
  }
);
