const salesService = require('../services/sales');

const insertSalesController = async (req, res) => {
  const resultBody = req.body;

  try {
    const result = await salesService.insertSalesService(resultBody);
    res.status(200).json(result);
  } catch (error) {
    return error.message;
  }
};

const getAllSalesController = async (req, res) => {
  try {
    const result = await salesService.getAllSalesService();
    res.status(200).json(result);
  } catch (error) {
    return error.message;
  }
};

const getSalesIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await salesService.getSalesIdService(id);
    res.status(200).json(result);
  } catch (error) {
    return error.message;
  }
};

const putSalesIdController = async (req, res) => {
  const { id } = req.params;
  const content = req.body;

  try {
    const result = await salesService.putOneSaleIdService(id, content);
    res.status(200).json(result);
  } catch (error) {
    return error.message;
  }
};

const deleteSalesIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await salesService.deleteOneSaleIdService(id);
    res.status(200).json(result);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  insertSalesController,
  getAllSalesController,
  getSalesIdController,
  putSalesIdController,
  deleteSalesIdController,
};
