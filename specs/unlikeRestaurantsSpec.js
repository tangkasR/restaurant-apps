/* eslint-disable no-undef */
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helper/testFactories';

describe('Unliking A resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="btnLikeContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantsIdb.putRestaurants({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantsIdb.deleteRestaurants(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantsIdb.deleteRestaurants(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
