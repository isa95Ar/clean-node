module.exports = (connection,sequelize) => {

  
   const Restaurants = require("./Restaurants");
   const Categories = require("./Categories");
   const Users = require("./Users");
   const Roles = require("./Roles");

   const restuarantModel = Restaurants(connection,sequelize);
   const categoriesModel = Categories(connection,sequelize);
   const usersModel = Users(connection,sequelize);
   const rolesModel = Roles(connection,sequelize);

   //belongsTo //belongsToMany //hasOne
   restuarantModel.belongsTo(categoriesModel,{foreignKey: 'category_id'});
   usersModel.belongsToMany(rolesModel,{through : 'roles_users'});

   return {
       User:usersModel,
       Role:rolesModel,
       Category:categoriesModel,
       Restaurant:restuarantModel
   };


}
