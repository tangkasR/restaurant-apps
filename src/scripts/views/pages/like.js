import FavoriteRestaurantsIdb from "../../data/favorite-restaurants-idb";
import "../templates/error-connection-template.js";
import "../templates/list-card-restaurants-template.js";
const Like = {
  async render() {
    return `
      <div id="main-content-favorite">
        <h1 tabindex="-1">Favorite Restaurant</h1>
        <list-card-restaurants-template class="card-container"></list-card-restaurants-template>
      </div>
      `;
  },

  async afterRender() {
    let favoriteContainer = document.querySelector("#main-content-favorite");
    try {
      const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector(
        "list-card-restaurants-template"
      );
      restaurantsContainer.restaurants = restaurants;
    } catch (error) {
      const errorConnection = document.createElement(
        "error-connection-template"
      );
      errorConnection.render();
      favoriteContainer = "";
      favoriteContainer.appendChild(errorConnection);
    }
  }
};

export default Like;
