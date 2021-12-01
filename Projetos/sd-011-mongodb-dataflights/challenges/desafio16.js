db.voos.find({
  natureza: { $gte: "Internacional" },
}).count();
