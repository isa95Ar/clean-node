const express = require("express");
const restaurants = require("../../controllers/restaurants"); //objeto con restaurants
const { Restaurant } = require("../../../database/connection");
const bodyParser = require("body-parser");
const app = express();

//sirve para recibir el body en una peticion post, dependiendo la versión de node se los pedira o no yo creo que estoy desactualizado
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get Restaurants
//localhost:4000/api/restaurants/
app.get("/",(req,res) => restaurants.getRestaurants(req,res));

//post Inserting Restaurants
app.post("/", async (req, res) => {
  const data = req.body;
  if (!data.name || !data.address || !data.schedule) {
    res.json({ error: "Invalid data!" });
  }
  const restaurant = await Restaurant.create(data);

  res.json(restaurant);
});

//filter a restaurant
app.get("/:id?", async (req, res) => {
  const id = req.params.id;

  const restaurant = await Restaurant.findAll({
    where: {
      id: id,
    },
    attributes: ["name", "address"],
  });
  if (restaurant.length == 0) {
    res.status(500).json({ error: "id is invalid" });
  }

  res.json(restaurant);
});

//
//update a restaurant
app.put("/:id?", async (req, res) => {
  const restaurant_id = req.params.id;
  const data = req.body;

  const restaurant = await Restaurant.update(data, {
    where: {
      id: restaurant_id,
    },
  });

  if (restaurant[0] === 1) {
    res.status(200).json({ message: "La operación fue realizada con exito" });
  } else {
    res.status(500).json({ error: "id is invalid" });
  }
});

app.delete("/:id?", async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurant.destroy({
    where: {
      id: id,
    },
  });

  if(restaurant == 0){
    res.status(500).json({ error: "id is invalid" });
  }else{
    res.status(200).json({ message: "La operación fue realizada con exito" });
  }

});

module.exports = app; //devuelve un objeto express
