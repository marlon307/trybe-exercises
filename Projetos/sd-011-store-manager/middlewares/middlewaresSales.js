const Joi = require('joi');
const { ObjectId } = require('mongodb');
const saleService = require('../services/sales');

const validSalesInfos = (req, res, next) => {
  const sale = req.body;

  const { error } = Joi.array().items(Joi.object({
    productId: Joi.allow(),
    quantity: Joi.number().integer().min(1).not()
      .empty()
      .required(),
  })).validate(sale);

  if (error) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      },
    });
  }
  next();
};

const existsSale = async (req, res, next) => {
  const { id } = req.params;

  const check = await saleService.deleteOneSaleIdService(id);
  if (!check) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }
  next();
};

const validID = async (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }
  next();
};

const validIDdelete = async (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong sale ID format',
      },
    });
  }
  next();
};

module.exports = {
  validSalesInfos,
  validID,
  validIDdelete,
  existsSale,
};
