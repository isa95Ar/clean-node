const { config } = require('./config/config'); //objeto con info estática sobre la base de datos
const api = require('./src/api'); //establece respuestas a '/restaurants' y a '/restaurants/:id?/:name?'
const path = require('path');

require("./database/connection"); //hace disponibles las tablas User, Role, Category y Restaurant
require("./src/middlewares/File"); //iniciando el middleware para el archivo


const express = require('express');
const app = express();

app.use('/api', api); //establece respuestas a a '/api/restaurants' y a '/api/restaurants/:id?/:name?'

app.get('/files/:file?', (req,res)=>{
  const options = {
    root: path.join(__dirname)
  };

  var fileName = 'files/'+req.params.file;
  res.sendFile(fileName, options);
});

app.listen(config.port, () => {
  console.log('el servidor esta corriendo =) ');
}); //mantiene escucha en el puerto establecido en config