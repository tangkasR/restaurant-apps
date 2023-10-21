/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantsIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantsIdb.deleteRestaurants(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsIdb);
});

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurants(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurants(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurants(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurants(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter(
      (restaurant) => restaurant.id !== id
    );
  }
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
