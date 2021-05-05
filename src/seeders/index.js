module.exports = () => {
  
    const {Role} = require("../models");

    const roles = [
        {
            name:"Admin"
        },
        {
            name:"User"
        }
    ];

    roles.forEach(item => {
       Role.create(item);
    }); 
};