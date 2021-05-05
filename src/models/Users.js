module.exports = (connection,sequelize) => {

    return connection.define("users",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        email:sequelize.STRING,
        phone: sequelize.STRING,
        password: sequelize.STRING,
        remember_token : sequelize.STRING
    });
};