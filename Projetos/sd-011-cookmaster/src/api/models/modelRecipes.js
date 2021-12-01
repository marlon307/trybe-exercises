const { ObjectId } = require('mongodb');
const connection = require('../connection');

const postModelRecipe = async (object, userId) => {
  try {
    const connectDb = await connection();
    const db = connectDb.collection('recipes');
    const result = await db.insertOne({ ...object, userId });
    return result.ops[0];
  } catch (error) {
    return error.message;
  }
};

const getAllModelRecipe = async () => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('recipes');
    const result = await db.find().toArray();
    return result;
  } catch (error) {
    return error.message;
  }
};

const getModelRecipeID = async (id) => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('recipes');
    const result = await db.findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    return null;
  }
};

const putModelRecipeID = async (id, object) => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('recipes');

    const result = await db.findOneAndUpdate({
      _id: new ObjectId(id),
    }, {
      $set: {
        name: object.name,
        ingredients: object.ingredients,
        preparation: object.preparation,
      },
    }, {
      returnOriginal: false,
    });

    return result.value;
  } catch (error) {
    return null;
  }
};

const getModelRecipeIDUser = async (idRecipe, IdUser) => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('recipes');
    const result = await db.findOne({
      $and: [
        { _id: new ObjectId(idRecipe) },
        { userId: IdUser },
      ],
    });

    return result;
  } catch (error) {
    return null;
  }
};

const deleteRecipeId = async (id) => {
  try {
    const connectDb = await connection();
    const db = await connectDb.collection('recipes');

    await db.deleteOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    return error.message;
  }
};

const modelAddImageRecipePut = async (id) => {
  try {
    const getRecipeId = await getModelRecipeID(id);
    const connectDb = await connection();
    const db = await connectDb.collection('recipes');

    const result = await db.findOneAndUpdate({
      _id: new ObjectId(id),
    }, {
      $set: {
        ...getRecipeId,
        image: `localhost:3000/src/uploads/${id}.jpeg`,
      },
    }, {
      returnOriginal: false,
    });
    return result.value;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  postModelRecipe,
  getAllModelRecipe,
  getModelRecipeID,
  putModelRecipeID,
  getModelRecipeIDUser,
  deleteRecipeId,
  modelAddImageRecipePut,
};
