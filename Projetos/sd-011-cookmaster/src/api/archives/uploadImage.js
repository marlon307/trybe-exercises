const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/../../uploads`);
  },

  filename: (req, file, callback) => {
    const { id } = req.params;

    const newName = `${id}.jpeg`;
    const pathName = `localhost:3000/src/uploads/${newName}`;

    req.pathName = pathName;

    callback(null, newName);
  },
});

const uploadImage = multer({ storage }).single('image');

module.exports = {
  uploadImage,
};
