const empresaVar = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: empresaVar,
  totalVoosDomesticos: db.voos.find({
    natureza: "Doméstica",
    "empresa.nome": empresaVar,
  }).count(),
});

db.resumoVoos.find({ empresa: empresaVar }, { _id: 0 });
