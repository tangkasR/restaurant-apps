import CONFIG from "../../globals/config";

class DetailRestaurantTemplate extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2>${this._restaurant.name}</h2>\
        <div id="category"></div>
        <div class="detailContent">
            <div class="imgDetail">
                <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" 
                alt="${this._restaurant.name}" />
            </div>
            <div class="information">
                <h4>City</h4>
                <p>${this._restaurant.city}</p>
                <h4>Rating</h4>
                <p>${this._restaurant.rating}</p>
                <h4>Address</h4>
                <p>${this._restaurant.address}</p>
                <h4>Description</h4>
                <p>${this._restaurant.description}</p>
            </div>
        </div>
    `;
  }
}
customElements.define("detail-restaurant-template", DetailRestaurantTemplate);
