/* eslint-disable arrow-parens */
import RestaurantsSource from '../../data/restaurants-source';
import '../templates/error-connection-template';
import '../templates/list-top-rated-template';

const TopRatedRestaurants = {
  async render() {
    return `
        <div class="loading-indicator">
          <div class="loader">
          </div>
        </div>
        <h1 class='top-rated-title'> Top Rated Restaurants</h1>
        <list-top-rated-template class="list-top-rated" id="top-rated">
        </list-top-rated-template>
      `;
  },

  async afterRender() {
    // eslint-disable-next-line prefer-const
    let restaurantContainer = document.querySelector('.list-top-rated');
    const loadingIndicator = document.querySelector('.loading-indicator');
    try {
      loadingIndicator.style.display = 'flex';
      const restaurants = await RestaurantsSource.getRestaurants();
      if (restaurants.length !== 0) {
        loadingIndicator.style.display = 'none';
        // eslint-disable-next-line no-shadow
        const restaurantContainer = document.querySelector(
          'list-top-rated-template'
        );
        const topRatedRestaurant = restaurants.filter(
          restaurant => restaurant.rating >= 4.5
        );
        restaurantContainer.restaurants = topRatedRestaurant;
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';
      const errorConnection = document.createElement(
        'error-connection-template'
      );
      errorConnection.render();
      restaurantContainer.innerHTML = '';
      restaurantContainer.appendChild(errorConnection);
    }
  }
};

export default TopRatedRestaurants;
