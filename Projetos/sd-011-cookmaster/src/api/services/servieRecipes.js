const {
  postModelRecipe,
  getAllModelRecipe,
  getModelRecipeID,
  putModelRecipeID,
  getModelRecipeIDUser,
  deleteRecipeId,
  modelAddImageRecipePut,
} = require('../models/modelRecipes');

const serviceReipes = async (object, userId) => {
  const result = await postModelRecipe(object, userId);

  return {
    recipe: result,
  };
};

const serviceReipesGetAll = async () => {
  const result = await getAllModelRecipe();
  return result;
};

const serviceGetRecipeId = async (id) => {
  const result = await getModelRecipeID(id);
  return result;
};

const servicePutRecipeId = async (id, contentBody) => {
  const result = await putModelRecipeID(id, contentBody);
  return result;
};

const serviceGetRecipeIdUser = async (idRecipe, IdUser) => {
  const result = await getModelRecipeIDUser(idRecipe, IdUser);
  return result;
};

const serviceDeleteRecipeId = async (id) => {
  await deleteRecipeId(id);
};

const serviceaddImageRecipePut = async (id) => {
  const result = await modelAddImageRecipePut(id);
  return result;
};

module.exports = {
  serviceReipes,
  serviceReipesGetAll,
  serviceGetRecipeId,
  servicePutRecipeId,
  serviceGetRecipeIdUser,
  serviceDeleteRecipeId,
  serviceaddImageRecipePut,
};
