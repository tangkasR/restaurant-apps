import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import '../templates/error-connection-template';
import '../templates/list-card-restaurants-template';

const Like = {
  async render() {
    return `
      <div id="main-content-favorite">
        <h1 tabindex="-1">Favorite Restaurant</h1>
        <div class="loading-indicator"><img src="./icons/loading-noBG.gif"/></div>
        <list-card-restaurants-template class="card-container"></list-card-restaurants-template>
      </div>
      `;
  },

  async afterRender() {
    // eslint-disable-next-line prefer-const
    let favoriteContainer = document.querySelector('#main-content-favorite');
    const loadingIndicator = favoriteContainer.querySelector('.loading-indicator');
    try {
      loadingIndicator.style.display = 'block';
      const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();

      if (restaurants.length !== 0) {
        loadingIndicator.style.display = 'none';
        const restaurantsContainer = document.querySelector(
          'list-card-restaurants-template',
        );
        restaurantsContainer.restaurants = restaurants;
      } else {
        loadingIndicator.style.display = 'none';
        favoriteContainer.innerHTML += 'Favorite Restaurant is Empty';
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';
      const errorConnection = document.createElement(
        'error-connection-template',
      );
      errorConnection.render();
      favoriteContainer.innerHTML = '';
      favoriteContainer.appendChild(errorConnection);
    }
  },
};

export default Like;
