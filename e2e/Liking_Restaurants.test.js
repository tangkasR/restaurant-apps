const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Favorite Restaurant is Empty', '.isEmpty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurant is Empty', '.isEmpty');
  I.amOnPage('/');

  I.wait(3);
  I.seeElement('.card p a');
  const firstRestaurant = locate('.card p a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(3);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('#main-content-favorite');

  I.wait(3);
  const likedRestaurantTitle = await I.grabTextFrom('.card p a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
