import { async } from "regenerator-runtime";
import RestaurantsSource from "../../data/restaurants-source";
import "../templates/list-card-restaurants-template.js";
import "../templates/error-connection-template.js";
import "../templates/error-search-template.js";
import "../templates/loading-template.js";
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
    const errorSearchContent = document.createElement("error-search-template");

    try {
      const restaurants = await RestaurantsSource.getRestaurants();

      let loadingContainer = document.querySelector(".loadingContainer");
      const loading = document.createElement("loading-template");
      loading.render();
      loadingContainer.appendChild(loading);
      let restaurantContainer = document.querySelector(
        "list-card-restaurants-template"
      );
      if (restaurants.length === 0) {
        loadingContainer.classList.add("show");
      }else{
        restaurantContainer.restaurants = restaurants;
        loadingContainer.classList.remove("show");
      }

      SearchInitiator.init({
        button: document.querySelector("#searchBtn"),
        container: restaurantContainer,
        errorSearchContent: errorSearchContent
      });
    } catch (error) {
      const errorConnection = document.createElement(
        "error-connection-template"
      );
      errorConnection.render();
      mainContainerRestaurants.innerHTML = "";
      mainContainerRestaurants.appendChild(errorConnection);
    }
  }
};

export default Restaurants;
