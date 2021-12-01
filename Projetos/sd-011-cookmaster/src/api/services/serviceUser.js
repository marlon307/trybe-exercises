const { createUser } = require('../models/modelUsers');

const createUserService = async (objectUser) => {
  const result = await createUser(objectUser);

  return {
    user: {
      name: result.ops[0].name,
      email: result.ops[0].email,
      role: result.ops[0].role,
    },
  };
};

module.exports = { createUserService };
