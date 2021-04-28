const restaurants = require('./restaurant');
const express = require('express');


const app = express();

app.use('/restaurants',restaurants);

module.exports = app;