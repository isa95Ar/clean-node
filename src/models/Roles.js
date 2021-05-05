module.exports = (connection,sequelize) => {
    return connection.define("roles",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING
    });
}