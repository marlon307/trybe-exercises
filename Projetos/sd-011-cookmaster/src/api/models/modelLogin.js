const connection = require('../connection');

const modelLogin = async (objectUser) => {
  const { email, password } = objectUser;

  try {
    const connectDb = await connection();
    const db = await connectDb.collection('users');

    const result = await db.findOne({
      email,
      password,
    });

    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  modelLogin,
};
