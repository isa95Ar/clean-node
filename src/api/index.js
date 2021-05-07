const restaurants = require('./restaurant'); //establece respuestas a 'root' y a '/:id?/:name?'
const express = require('express');
const app = express();

app.use('/restaurants',restaurants); //establece respuestas a '/restaurants' y a '/restaurants/:id?/:name?'

module.exports = app; //devuelve un objeto express