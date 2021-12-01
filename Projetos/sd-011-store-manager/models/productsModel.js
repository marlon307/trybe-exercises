const { ObjectId } = require('mongodb');
const connection = require('./connection');

const insertOneProduct = async (object) => {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');
    const result = await db.insertOne(object);
    return result.ops[0];
  } catch (err) {
    return err.message;
  }
};

const getOneProduct = async (name) => {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');
    const result = await db.findOne({ name });
    return result;
  } catch (error) {
    return error.message;
  }
};

const getAllProducts = async () => {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');
    const result = await db.find().toArray();
    return { products: result };
  } catch (error) {
    return error.message;
  }
};

const getIdProduct = async (id) => {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');
    const result = await db.findOne(new ObjectId(id));
    return result;
  } catch (error) {
    return error.message;
  }
};

const putProduct = async (id, object) => {
  const { name, quantity } = object;
  const options = { returnDocument: 'after' };
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');

    const result = await db.findOneAndUpdate({
      _id: new ObjectId(id),
    }, {
      $set: {
        name,
        quantity,
      },
    }, options);

    return result.value;
  } catch (error) {
    return error.message;
  }
};

const deleteProduct = async (id) => {
  try {
    const connectDB = await connection();
    const db = await connectDB.collection('products');

    const result = await db.findOneAndDelete({
      _id: new ObjectId(id),
    }, {
      backwards: true,
    });

    return result.value;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  insertOneProduct,
  getOneProduct,
  getAllProducts,
  getIdProduct,
  putProduct,
  deleteProduct,
};
