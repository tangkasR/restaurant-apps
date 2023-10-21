const assert = require('assert');
/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('unliking one movie', async ({ I }) => {
  I.see('Favorite Restaurant is Empty', '.isEmpty');
  I.amOnPage('/');

  I.wait(3);
  I.waitForElement('.card');
  I.seeElement('.card p a');
  const firstRestaurant = locate('.card p a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.wait(3);
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.card p a');

  const firstRestaurantLike = locate('.card p a').first();
  const favoriteRestaurantTitle = await I.grabTextFrom(firstRestaurantLike);
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(firstRestaurantLike);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.isEmpty');
  const onFavorite = await I.grabTextFrom('.isEmpty');
  assert.strictEqual(onFavorite, 'Favorite Restaurant is Empty');
});
