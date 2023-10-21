import './card-restaurant-template';

class ListCardRestaurantsTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const itemRestaurant = document.createElement('card-restaurant-template');
      itemRestaurant.restaurant = restaurant;
      this.appendChild(itemRestaurant);
    });
  }
}
customElements.define(
  'list-card-restaurants-template',
  ListCardRestaurantsTemplate,
);
