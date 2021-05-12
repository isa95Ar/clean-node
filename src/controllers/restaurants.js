const {Restaurant}  = require('../../database/connection');

const getRestaurants = async (req,res) => {
  const restaurants = await Restaurant.findAll({
    attributes: ["name", "address"],
  });

  res.json(restaurants);
}


exports.getRestaurants = getRestaurants; //devuelve array de objetos restaurants (dummy DB)