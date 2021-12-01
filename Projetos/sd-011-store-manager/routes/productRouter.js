const router = require('express').Router();
const controllerProducts = require('../controllers/controllerProducts');
const middlewaresProducts = require('../middlewares/middlewaresProducts');

const {
  execInsert,
  getAllProductsController,
  getIdProductController,
  putIdController,
  deleteIdController,
} = controllerProducts;
const { validNameLength, checkProductExist, validNumber, validID } = middlewaresProducts;

router.get('/:id', validID, getIdProductController);

router.put('/:id', validNameLength, validNumber, putIdController);

router.delete('/:id', validID, deleteIdController);

router.get('/', getAllProductsController);

router.post('/',
  validNameLength,
  checkProductExist,
  validNumber,
  execInsert);

module.exports = router;
