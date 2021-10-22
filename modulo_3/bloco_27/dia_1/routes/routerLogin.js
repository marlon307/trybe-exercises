const router = require('express').Router();
const controllerLogin = require('../controllers/controllerLogin')

router.post('/', controllerLogin);

module.exports = router;
