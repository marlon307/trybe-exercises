module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });
  //   remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`

  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
    });
  };
  return Users;
};
