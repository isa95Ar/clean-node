module.exports=(connection,sequelize) => {
   return connection.define('restaurants',{
          id:{
              type: sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true
          },
          name: sequelize.STRING,
          address: sequelize.STRING,
          schedule:sequelize.STRING,
          profile_picture: sequelize.STRING
   });
} //devuelve una función que define la tabla 'restaurants'