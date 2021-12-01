const router = require('express').Router();
const { controllerLogin } = require('../controllers/controllerLogin');
const { pswAndemailexists } = require('../middlewares/validLogin');

router.post('/', pswAndemailexists, controllerLogin);

module.exports = router;
