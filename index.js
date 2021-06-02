const { config } = require('./config/config'); //objeto con info estática sobre la base de datos
//const api = require('./src/api'); //establece respuestas a '/restaurants' y a '/restaurants/:id?/:name?'

//require("./database/connection"); //hace disponibles las tablas User, Role, Category y Restaurant

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/api', api); //establece respuestas a a '/api/restaurants' y a '/api/restaurants/:id?/:name?'
app.get('/',(req,res)=>{
    res.json({title:'Hello from api'});
});

app.post('/create/user',(req,res) => {
  const data = req.body;
  console.log(data);
});
app.listen(config.port, () => {
  console.log('el servidor esta corriendo =) ');
}); //mantiene escucha en el puerto establecido en config