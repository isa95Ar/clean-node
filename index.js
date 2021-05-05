const {config} = require('./config/config');
const api = require('./src/api');

const db = require("./database/connection");
db();

const express = require('express');
const app = express();

//we routing /api 
app.use('/api',api);

app.listen(config.port,() => {
    console.log('el servidor esta corriendo =) ');
});