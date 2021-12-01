const router = require('express').Router();
const { createUserController } = require('../controllers/controllerUsers');
const {
  validEmail,
  validPassword,
  validUser,
  userExist,
} = require('../middlewares/validCreatUser');

router.post('/', validUser, validEmail, userExist, validPassword, createUserController);

module.exports = router;
