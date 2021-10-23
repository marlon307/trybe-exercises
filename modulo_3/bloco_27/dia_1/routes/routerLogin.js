const router = require('express').Router();
const controllerLogin = require('../controllers/controllerLogin')
const middlewaresLoginLogin = require('../middlewares/middlewareLogin')

router.post('/', middlewaresLoginLogin, controllerLogin);

module.exports = router;
