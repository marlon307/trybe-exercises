const { ObjectId } = require('mongodb');
const connection = require('./connection');

async function insertSaleModel(array) {
  const connectDB = await connection();
  const db = await connectDB.collection('sales');

  const result = await db.insertOne({
    itensSold: array,
  });

  return result.ops[0];
}

async function updateOneSaleModel(id, qtd) {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');

    const result = await db.updateOne({
      _id: new ObjectId(id),
    }, {
      $inc: {
        quantity: -qtd,
      },
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

async function getAllSalesModel() {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('sales');
    const result = await db.find().toArray();

    return { sales: result };
  } catch (error) {
    return error.message;
  }
}

async function getSalesIdModel(id) {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('sales');
    const result = await db.findOne({
      _id: new ObjectId(id),
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

async function putOneSaleIdModel(id, array) {
  const options = { returnDocument: 'after' };

  try {
    const connectDB = await connection();
    const db = await connectDB.collection('sales');

    const result = await db.findOneAndUpdate({
      _id: new ObjectId(id),
    }, {
      $set: {
        itensSold: array,
      },
    }, options);

    return result.value;
  } catch (error) {
    return error.message;
  }
}

async function deleteSalesModel(id) {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('sales');

    const result = await db.findOneAndDelete({
      _id: new ObjectId(id),
    }, {
      backwards: true,
    });

    return result.value;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  insertSaleModel,
  updateOneSaleModel,
  getAllSalesModel,
  getSalesIdModel,
  putOneSaleIdModel,
  deleteSalesModel,
};
