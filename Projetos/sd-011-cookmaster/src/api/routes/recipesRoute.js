const router = require('express').Router();
const {
  chekTokenRecipe,
  validRecipe,
  tokenExists,
} = require('../middlewares/validRecipe');
const {
  conttrolerRecipePost,
  recipesControllerGetAll,
  recipesControllerGetId,
  recipesControllerPutId,
  recipesControllerDeleteId,
  recipesControllerAddImageId,
} = require('../controllers/controllerRecipes');

const { uploadImage } = require('../archives/uploadImage');

router.post('/', chekTokenRecipe, validRecipe, conttrolerRecipePost);

router.get('/', recipesControllerGetAll);

router.get('/:id', recipesControllerGetId);

router.put('/:id', tokenExists, chekTokenRecipe, recipesControllerPutId);

router.delete('/:id', tokenExists, recipesControllerDeleteId);

router.put('/:id/image', tokenExists, uploadImage, recipesControllerAddImageId);

module.exports = router;
