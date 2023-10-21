/* eslint-disable no-undef */
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helper/testFactories';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="btnLikeContainer"></div>';
  };
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the Restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // Memastikan resto berhasil disukai
    const restaurant = await FavoriteRestaurantsIdb.getRestaurants(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantsIdb.deleteRestaurants(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Tambahkan resto dengan ID 1 ke daftar resto yang disukai
    await FavoriteRestaurantsIdb.putRestaurants({ id: 1 });
    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada resto yang ganda
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([
      { id: 1 }
    ]);
    await FavoriteRestaurantsIdb.deleteRestaurants(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
