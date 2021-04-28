const getRestaurants = () => {
    // el codigo para obtener los restaurantes de la base de datos
    const restaurants = [
        {
            id:1,
            name:"Weiss!",
            address:"9 de Julio"
        },
        {
            id:2,
            name:"Burger King!",
            address:"Beschedt y brown"
        }
    ];


    return restaurants;
}

exports.getRestaurants = getRestaurants;