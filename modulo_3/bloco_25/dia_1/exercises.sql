-- https://app.betrybe.com/course/back-end/mongodb-aggregation-framework/aggregation-framework-parte-1/bf5e1776-42ac-44c7-82ea-d0c959136930/exercicios/8d24d2b7-7ebc-4001-b8d2-13ee842e27a5/agora-a-pratica/8cfd6aba-a0d4-4afd-9452-fcd11ba66d5f?use_case=side_bar


-- Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
db.clientes.aggregate([
  {
    $match : { sexo: 'MASCULINO' } 
  }
]);

-- Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

db.clientes.aggregate([
  {
    $match : { 
      sexo: 'FEMININO',
      dataNascimento:{ 
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-01-01')
      }
    } 
  }
]);

-- Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .

db.clientes.aggregate([
  {
    $match : { 
      sexo: 'FEMININO',
      dataNascimento:{ 
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-01-01')
      }
    } 
  },
  {
    $limit: 5
  }
]);

-- Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

db.clientes.aggregate([
  { $match : { "endereco.uf": "SC" } },
  {
    $group: { 
      _id: "$endereco.uf",
      total: { $sum: 1 }
    }
  }
]);

-- Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .

db.clientes.aggregate([
  {
    $group: { 
      _id: "$sexo",
      total: { $sum: 1 }
    }
  }
]);

-- Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .

db.clientes.aggregate([
  {
    $group: { 
      _id: {
        "sexo": "$sexo",
        "uf": "$endereco.uf"
      },
      total: { $sum: 1 }
    },
  }
]);

-- Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):

db.clientes.aggregate([
  {
    $group: { 
      _id: {
        "sexo": "$sexo",
        "estado": "$endereco.uf",
      },
      total: { $sum: 1 }
    },
  }, {
    $project: {
      "sexo": "$sexo",
      "estado": "$endereco.uf",
      "total": "$total"
    }
  }
]);

-- Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

db.produtos.aggregate([
  {
    $group: { 
      _id: {
      "nome": "$nome",
      "valor": "$valor"
      }
    },
  },
  {
    $sort: { valor: 1 }
  },
  {
    $limit: 5,
  }
]);

-- Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      valorTotal: {
        $sum: "$valorTotal"
      }
    }
  },
  {
    $sort: {
      valotTotal: -1
    }
  },
  {
    $limit: 10
  }
]);

-- Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o o total de clientes.
-- Dica: O operador $count pode simplificar sua query .
-- Utilizando $group e $project :

db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);

db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $count: 'clientes'
  },
]);

-- Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
    $count: 'clientes'
  }
]);

-- Exercício 12 : Descubra qual as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01')
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
    $unwind: "$dadosCliente"
  },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      totalVendas: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);

-- Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
    $unwind: "$cliente"
  },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  },
  {
    $sort: {
      uf: 1
    }
  }
]);
