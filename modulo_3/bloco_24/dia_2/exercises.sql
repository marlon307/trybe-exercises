-- Exercício 1: Adicione a categoria "superhero" ao filme Batman .
db.movies.updateMany({
  title: "Batman"
}, {
  $push: { 
    category: "superhero"
  }
});

-- Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .

db.movies.updateMany({
  title: "Batman"
}, {
  $push: { 
    category: { 
      $each: ["villain", "comic-based"]
    }
  }
});

-- Exercício 3: Remova a categoria "action" do filme Batman .

db.movies.updateMany({
  title: "Batman"
}, {
  $pull: { 
    category: "action"
  }
});

-- Exercício 4: Remova o primeiro elemento do array category do filme Batman .

db.movies.updateMany({
  title: "Batman"
}, {
  $pop: { 
    category: -1
  }
});

-- Exercício 5: Remova o último elemento do array category do filme Batman .

db.movies.updateMany({
  title: "Batman"
}, {
  $pop: { 
    category: 1
  }
});

db.movies.find();
