import RestaurantsSource from '../../data/restaurants-source';
import '../templates/list-card-restaurants-template';
import '../templates/error-connection-template';
import '../templates/error-search-template';
import SearchInitiator from '../../utils/search-initiator';

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
        <div class="loading-indicator"><img src="./icons/loading-noBG.gif"/></div>
        <list-card-restaurants-template class="card-container"></list-card-restaurants-template>
      </div>
      `;
  },

  async afterRender() {
    // eslint-disable-next-line prefer-const
    let mainContainerRestaurants = document.querySelector(' #main-content-restaurants ');
    const errorConnection = document.createElement('error-connection-template');
    const errorSearch = document.createElement('error-search-template');
    const loadingIndicator = mainContainerRestaurants.querySelector('.loading-indicator');

    try {
      loadingIndicator.style.display = 'block';

      const restaurants = await RestaurantsSource.getRestaurants();

      if (restaurants.length !== 0) {
        loadingIndicator.style.display = 'none';

        const restaurantContainer = document.querySelector('list-card-restaurants-template');

        restaurantContainer.restaurants = restaurants;

        SearchInitiator.init({
          button: document.querySelector('#searchBtn'),
          container: restaurantContainer,
          mainContainer: mainContainerRestaurants,
          errorSearchContent: errorSearch,
        });
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';
      errorConnection.render();
      mainContainerRestaurants.innerHTML = '';
      mainContainerRestaurants.appendChild(errorConnection);
    }
  },
};

export default Restaurants;
