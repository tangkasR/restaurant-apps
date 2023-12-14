/* eslint-disable quotes */
const assert = require("assert");
/* eslint-disable no-undef */
Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("#/like");
});
Scenario("showing empty liked restaurants", ({ I }) => {
  I.see("Favorite Restaurant is Empty", ".isEmpty");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Favorite Restaurant is Empty", ".isEmpty");
  I.amOnPage("/");

  I.wait(3);
  I.seeElement(".card p a");
  const firstRestaurant = locate(".card p a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(3);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.wait(3);

  I.amOnPage("#/like");
  I.wait(3);
  I.seeElement("#main-content-favorite");

  I.wait(3);
  const likedRestaurantTitle = await I.grabTextFrom(".card p a");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
Scenario("Unliking one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.wait(2);
  I.waitForElement(".card p a");
  I.seeElement(".card p a");
  const firstRestaurant = locate(".card p a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.wait(2);
  I.amOnPage("#/like");
  I.wait(2);
  I.seeElement(".card p a");

  const firstRestaurantLike = locate(".card p a").first();
  const favoriteRestaurantTitle = await I.grabTextFrom(firstRestaurantLike);
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(firstRestaurantLike);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.wait(2);
  I.amOnPage("#/like");
  I.wait(2);
  I.seeElement(".isEmpty");
  const onFavorite = await I.grabTextFrom(".isEmpty");
  assert.strictEqual(onFavorite, "Favorite Restaurant is Empty");
});
