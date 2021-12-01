const router = require('express').Router();
const controllerSales = require('../controllers/constrollerSales');
const middlewareSale = require('../middlewares/middlewaresSales');

const {
  insertSalesController,
  getAllSalesController,
  getSalesIdController,
  putSalesIdController,
  deleteSalesIdController,
} = controllerSales;
const {
  validID,
  validSalesInfos,
  validIDdelete,
  existsSale,
} = middlewareSale;

router.post('/', validSalesInfos, insertSalesController);

router.get('/', getAllSalesController);

router.get('/:id', existsSale, validID, getSalesIdController);

router.put('/:id', validSalesInfos, putSalesIdController);

router.delete('/:id', validIDdelete, deleteSalesIdController);

module.exports = router;
