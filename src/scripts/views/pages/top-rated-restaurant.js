import RestaurantsSource from "../../data/restaurants-source";
import "../templates/error-connection-template.js";
import "../templates/list-top-rated-template";
const TopRatedRestaurants = {
  async render() {
    return `
        <list-top-rated-template class="list-top-rated">
        </list-top-rated-template>
      `;
  },

  async afterRender() {
    let restaurantContainer = document.querySelector(".list-top-rated");
    const errorConnection = document.createElement("error-connection-template");
    try {
      const restaurants = await RestaurantsSource.getRestaurants();
      const restaurantContainer = document.querySelector(
        "list-top-rated-template"
      );
      const topRatedRestaurant = restaurants.filter(
        (restaurant) => restaurant.rating >= 4.5
      );
      restaurantContainer.restaurants = topRatedRestaurant;
    } catch (error) {
      restaurantContainer.innerHTML = "";
      restaurantContainer.innerHTML += errorConnection.render();
    }
  }
};

export default TopRatedRestaurants;
