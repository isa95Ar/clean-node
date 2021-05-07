module.exports = (connection, sequelize) => {
  return connection.define("roles", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize.STRING
  });
} //devuelve una función que define la tabla 'roles'
