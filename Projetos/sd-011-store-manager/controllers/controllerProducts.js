const productsService = require('../services/products');

const execInsert = async (req, res) => {
  const { name, quantity } = req.body;

  try {
    const result = await productsService.insertProduct({ name, quantity });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const result = await productsService.getAllProductsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getIdProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await productsService.getIdProductsService(id);
    if (result === null) {
      return res.status(422).json({
        err: {
          code: 'invalid_data',
          message: 'Wrong id format',
        },
      });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      err: error.message,
    });
  }
};

const putIdController = async (req, res) => {
  const { id } = req.params;
  const object = req.body;

  try {
    const result = await productsService.putIdProductService(id, object);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      err: error.message,
    });
  }
};

const deleteIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await productsService.deleteIdProductService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      err: error.message,
    });
  }
};

module.exports = {
  execInsert,
  getAllProductsController,
  getIdProductController,
  putIdController,
  deleteIdController,
};
