import { async } from "regenerator-runtime";
import RestaurantsSource from "../../data/restaurants-source";
import "../templates/list-card-restaurants-template.js";
import "../templates/error-connection-template.js";
import "../templates/error-search-template.js";
import SearchInitiator from "../../utils/search-initiator";
const Restaurants = {
  async render() {
    return `
      <div id="main-content-restaurants">
        <h1 tabindex="-1">Explore Restaurant</h1>
        <section class="search-container">
        <input type="text" id="searchInput" class="searchInput" name="Search Restaurant by Name and City"
            placeholder="Search Restaurant by Name and City" for="searchBtn">
        <button id="searchBtn" type="submit" aria-label="button search"></button>
        </section>
        <list-card-restaurants-template class="card-container"></list-card-restaurants-template>
      </div>
      `;
  },

  async afterRender() {
    
    let mainContainerRestaurants = document.querySelector(
      "#main-content-restaurants"
    );
    const errorConnection = document.createElement("error-connection-template");
    const errorSearchContent = document.createElement("error-search-template");

    try {
      const restaurants = await RestaurantsSource.getRestaurants();
      console.log(restaurants);
      const restaurantContainer = document.querySelector(
        "list-card-restaurants-template"
      );

      restaurantContainer.restaurants = restaurants;

      SearchInitiator.init({
        button: document.querySelector("#searchBtn"),
        container: restaurantContainer,
        mainContainer: mainContainerRestaurants,
        errorSearchContent: errorSearchContent
      });
    } catch (error) {
      mainContainerRestaurants.innerHTML = "";
      mainContainerRestaurants.innerHTML += errorConnection.render();
    }
  }
};

export default Restaurants;
