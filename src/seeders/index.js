module.exports = () => {
  
    const db = require("../../database/connection");
    const {Role} = db();
    
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