const { createUserService } = require('../services/serviceUser');

const createUserController = async (req, res) => {
  const objectUser = req.body;

  const result = await createUserService(objectUser);
  res.status(201).json(result);
};

module.exports = {
  createUserController,
};
