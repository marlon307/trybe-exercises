db.voos.find({
  $or: [
    { "aeroportoDestino.pais": "BRASIL" },
    { "aeroportoDestino.pais": "ARGENTINA" },
    { "aeroportoDestino.pais": "CHILE" },
  ],
}).count();

// ["BRASIL", "ARGENTINA", "CHILE"]
