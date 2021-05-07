const express = require('express');
const restaurants = require('../../controllers/restaurants'); //objeto con restaurants
const app = express();

app.get('/',(req,res) =>{
    const restaurants = [ // !!! si no me equivoco, acá se reemplaza el objeto restaurants por un array de 1 objeto
        {
            id:1,
            name:"Weiss!",
            address:"9 de Julio"
        }
    ];
    res.json(restaurants); //muestra en 'root' el array restaurants
});

//get Restaurant
//localhost:4000/api/restaurants/
app.get('/:id?/:name?',(req,res) => {
    res.json(restaurants.getRestaurants()); // !!! si no me equivoco, muestra todos los restaurants
                                            //     sin importar id? o name?
});

module.exports = app; //devuelve un objeto express