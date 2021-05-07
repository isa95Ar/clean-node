const getRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Weiss!",
      address: "9 de Julio"
    },
    {
      id: 2,
      name: "Burger King!",
      address: "Beschedt y brown"
    }
  ];
  return restaurants;
}

exports.getRestaurants = getRestaurants; //devuelve array de objetos restaurants (dummy DB)