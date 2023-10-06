import "./top-rated-template";
class ListTopRatedTemplate extends HTMLElement {
  constructor() {
    super();
  }
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }
  render() {
    this.innerHTML = ``;
    this._restaurants.forEach(restaurant => {
      const itemRestaurant = document.createElement("top-rated-template");
      itemRestaurant.restaurant = restaurant;
      this.appendChild(itemRestaurant);
    });
  }
}
customElements.define(
  "list-top-rated-template",
  ListTopRatedTemplate
);
