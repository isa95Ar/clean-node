const {config} = require('./src/config/config');
const api = require('./src/api');

const express = require('express');

const app = express();

//localhost
app.use('/api',api);


app.listen(config.port,() => {
    console.log('el servidor esta corriendo =) ');
});