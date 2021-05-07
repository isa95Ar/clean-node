module.exports = (connection, sequelize) => { //en ningun momento se el parámetro 'sequelize'
  return connection.define('categories', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize.STRING
  });
} //devuelve una función que define la tabla 'categories'