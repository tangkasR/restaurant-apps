import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter.js';
import FavoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurants-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#btnLikeContainer'),
    favoriteRestaurants: FavoriteRestaurantsIdb,
    restaurant
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
