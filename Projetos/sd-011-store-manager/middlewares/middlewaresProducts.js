const { ObjectId } = require('mongodb');
const productsService = require('../services/products');

const checkProductExist = async (req, res, next) => {
  const { name } = req.body;
  const objectResult = await productsService.getServiceOneProduct(name);
  if (objectResult) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    });
  }
  next();
};

const validNameLength = async (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
    });
  }
  next();
};

const validNumber = async (req, res, next) => {
  const { quantity } = req.body;

  if (typeof quantity !== 'number') {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
      },
    });
  }
  if (quantity <= 0) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
      },
    });
  }
  next();
};

const validID = async (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    });
  }
  next();
};

module.exports = {
  checkProductExist,
  validNameLength,
  validNumber,
  validID,
};
