module.exports = () => {
  const { Role } = require("../../database/connection"); // Role es una tabla de la DB
  const roles = [
    {
      name: "Admin"
    },
    {
      name: "User"
    }
  ];

  roles.forEach(item => {
    Role.create(item);
  }); 
}; //devuelve una función que crea en la tabla Role un registro "admin" y un "user"