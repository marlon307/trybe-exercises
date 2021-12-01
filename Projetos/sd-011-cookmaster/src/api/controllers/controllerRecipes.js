const { validAuth } = require('../auth/authenticator');
const {
  serviceReipes,
  serviceReipesGetAll,
  serviceGetRecipeId,
  servicePutRecipeId,
  serviceGetRecipeIdUser,
  serviceDeleteRecipeId,
  serviceaddImageRecipePut,
} = require('../services/servieRecipes');

const conttrolerRecipePost = async (req, res) => {
  const { authorization } = req.headers;
  const dataBody = req.body;

  const { data: { _id } } = validAuth(authorization);
  const result = await serviceReipes(dataBody, _id);

  res.status(201).json(result);
};

const recipesControllerGetAll = async (req, res) => {
  const result = await serviceReipesGetAll();
  res.status(200).json(result);
};

const recipesControllerGetId = async (req, res) => {
  const { id } = req.params;
  const result = await serviceGetRecipeId(id);

  if (result) {
    return res.status(200).json(result);
  }
  return res.status(404).json({
    message: 'recipe not found',
  });
};

const recipesControllerPutId = async (req, res) => {
  const { authorization } = req.headers;
  const { _id, role } = validAuth(authorization).data;
  const { id } = req.params;

  const checkUserRecipeIdExist = await serviceGetRecipeIdUser(id, _id);

  if (role === 'admin' || checkUserRecipeIdExist) {
    const contentBody = req.body;

    const result = await servicePutRecipeId(id, contentBody);

    return res.status(200).json(result);
  }
  return res.status(400).json({ message: 'Invalid entries. Try again.' });
};

const recipesControllerDeleteId = async (req, res) => {
  const { authorization } = req.headers;
  const { _id, role } = validAuth(authorization).data;
  const { id } = req.params;

  const checkUserRecipeIdExist = await serviceGetRecipeIdUser(id, _id);

  await serviceDeleteRecipeId(id);

  if (role === 'admin' || checkUserRecipeIdExist) {
    return res.status(204).end();
  }
};

const recipesControllerAddImageId = async (req, res) => {
  const { id } = req.params;
  const result = await serviceaddImageRecipePut(id);
  res.status(200).json(result);
};

module.exports = {
  conttrolerRecipePost,
  recipesControllerGetAll,
  recipesControllerGetId,
  recipesControllerPutId,
  recipesControllerDeleteId,
  recipesControllerAddImageId,
};
