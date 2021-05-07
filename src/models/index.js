module.exports = (connection, sequelize) => {
  const Restaurants = require("./Restaurants"); //función que define la tabla Restaurants
  const Categories = require("./Categories"); //función que define la tabla Categories
  const Users = require("./Users"); //función que define la tabla Users
  const Roles = require("./Roles"); //función que define la tabla Roles

  const restuarantModel = Restaurants(connection, sequelize); //definición de tabla Restaurants
  const categoriesModel = Categories(connection, sequelize); //definición de tabla Categories
  const usersModel = Users(connection, sequelize); //definición de tabla Users
  const rolesModel = Roles(connection, sequelize); //definición de tabla Roles

  //belongsTo //belongsToMany //hasOne
  restuarantModel.belongsTo(categoriesModel, { foreignKey: 'category_id' });
  usersModel.belongsToMany(rolesModel, { through: 'roles_users' });

  return {
    User: usersModel,
    Role: rolesModel,
    Category: categoriesModel,
    Restaurant: restuarantModel
  };
} //devuelve una función que devuelve un objeto con las definiciones de las tablas
