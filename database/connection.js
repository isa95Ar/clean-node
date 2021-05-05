module.exports = () => {
    const seeders = require("../src/seeders");
    const { config } = require("../config/config.js");
    const initialModels = require("../src/models");
  
    const Sequelize = require("sequelize");

    const connection = new Sequelize(config.database_name, config.database_user, config.database_password, {
        host: 'localhost',
        dialect: 'mysql'
    });

    const {User,Role,Category,Restaurant} = initialModels(connection, Sequelize);

    connection.sync({ force: false }).then(() => {
        console.log("wiii! funciono");
        seeders();

    }).catch(e => {
        console.log(e);
    });

    return {
        User,
        Role,
        Category,
        Restaurant
    }

}
