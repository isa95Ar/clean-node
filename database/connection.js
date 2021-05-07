
const seeders = require("../src/seeders"); //obtiene una función que crea en la tabla Role un registro "admin" y un "user"
const { config } = require("../config/config.js"); //objeto con info estática sobre la base de datos
const initialModels = require("../src/models"); //función que devuelve objeto con las definiciones de las tablas

const Sequelize = require("sequelize");

const connection = new Sequelize(config.database_name, config.database_user, config.database_password, {
  host: 'localhost',
  dialect: 'mysql'
});

const { User, Role, Category, Restaurant } = initialModels(connection, Sequelize);

connection.sync({ force: false }).then(() => { //se sincroniza la DB con las definiciones de la tabla
  console.log("wiii! funciono");
  seeders(); //luego se agregan los registros "admin" y "user"
}).catch(e => {
  console.log(e);
});

module.exports = {  //devuelve tablas de la BD
  User,
  Role,
  Category,
  Restaurant
}