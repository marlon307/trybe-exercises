const connection = require('../connection');

const createUser = async (objectUser) => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('users');
    const { name, email, password, role } = objectUser;
    let newObject = { name, email, password, role };
    if (!role) {
      newObject = {
        name,
        email,
        password,
        role: 'user',
      };
    }
    const result = await db.insertOne(newObject);
    return result;
  } catch (error) {
    return error.message;
  }
};

const getEmailExist = async (email) => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('users');
    const result = await db.findOne({ email });

    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
  getEmailExist,
};
