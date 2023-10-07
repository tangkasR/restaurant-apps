import RestaurantsSource from "../../data/restaurants-source";
import "../templates/error-connection-template.js";
import "../templates/list-top-rated-template.js";
import "../templates/loading-template.js";
const TopRatedRestaurants = {
  async render() {
    return `
        <list-top-rated-template class="list-top-rated">
        </list-top-rated-template>
      `;
  },

  async afterRender() {
    let restaurantContainer = document.querySelector(".list-top-rated");
    const loading = document.createElement("loading-template");
    loading.render();
    restaurantContainer.innerHTML = loading;
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
      const errorConnection = document.createElement(
        "error-connection-template"
      );
      errorConnection.render();
      restaurantContainer.innerHTML = "";
      restaurantContainer.appendChild(errorConnection);
    }
  }
};

export default TopRatedRestaurants;
