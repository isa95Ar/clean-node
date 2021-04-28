const express = require('express');
const restaurants = require('../../controllers/restaurants');
const app = express();

//Get restaurants
app.get('/',(req,res) =>{
    const restaurants = [

        {
            id:1,
            name:"Weiss!",
            address:"9 de Julio"
        }
    ];

    res.json(restaurants);
});

//get Restaurant
//localhost:4000/api/restaurants/
app.get('/:id?/:name?',(req,res) => {


    res.json(restaurants.getRestaurants());
});

module.exports = app;