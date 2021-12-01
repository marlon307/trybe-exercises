const salesModel = require('../models/salesModel');

const insertSalesService = async (array) => {
  try {
    await array.forEach(({ productId, quantity }) => {
      salesModel.updateOneSaleModel(productId, quantity);
    });

    const result = await salesModel.insertSaleModel(array);
    return result;
  } catch (error) {
    return error.message;
  }
};

const getAllSalesService = async () => {
  try {
    const result = await salesModel.getAllSalesModel();
    return result;
  } catch (error) {
    return error.message;
  }
};

const getSalesIdService = async (id) => {
  try {
    const result = await salesModel.getSalesIdModel(id);
    return result;
  } catch (error) {
    return error.message;
  }
};

const putOneSaleIdService = async (id, array) => {
  try {
    const result = await salesModel.putOneSaleIdModel(id, array);
    return result;
  } catch (error) {
    return error.message;
  }
};

const deleteOneSaleIdService = async (id) => {
  try {
    const result = await salesModel.deleteSalesModel(id);
    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  insertSalesService,
  getAllSalesService,
  getSalesIdService,
  putOneSaleIdService,
  deleteOneSaleIdService,
};
