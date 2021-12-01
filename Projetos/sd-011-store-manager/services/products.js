const productsModel = require('../models/productsModel');

const insertProduct = async (object) => {
  const result = await productsModel.insertOneProduct(object);
  return result;
};

const getServiceOneProduct = async (name) => {
  const result = await productsModel.getOneProduct(name);
  return result;
};

const getAllProductsService = async () => {
  const result = await productsModel.getAllProducts();
  return result;
};

const getIdProductsService = async (id) => {
  const result = await productsModel.getIdProduct(id);
  return result;
};

const putIdProductService = async (id, object) => {
  const result = await productsModel.putProduct(id, object);
  return result;
};

const deleteIdProductService = async (id) => {
  const result = await productsModel.deleteProduct(id);
  return result;
};

module.exports = {
  insertProduct,
  getAllProductsService,
  getServiceOneProduct,
  getIdProductsService,
  putIdProductService,
  deleteIdProductService,
};
