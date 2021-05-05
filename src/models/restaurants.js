module.exports=(connection,sequelize) => {
   return connection.define('restaurants',{
          id:{
              type: sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true
          },
          name: sequelize.STRING,
          address: sequelize.STRING,
          schedule:sequelize.STRING
   });
}