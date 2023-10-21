import CONFIG from '../../globals/config';

class DetailRestaurantTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2 tabindex="0">${this._restaurant.name}</h2>\
        <div id="category"></div>
        <div class="detailContent" tabindex="-1">
            <div class="imgDetail">
                <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" 
                alt="${this._restaurant.name}" />
            </div>
            <div class="information">
                <h4 tabindex="0">City</h4>
                <p tabindex="0">${this._restaurant.city}</p>
                <h4 tabindex="0">Rating</h4>
                <p tabindex="0">${this._restaurant.rating}</p>
                <h4 tabindex="0">Address</h4>
                <p tabindex="0">${this._restaurant.address}</p>
                <h4 tabindex="0">Description</h4>
                <p tabindex="0">${this._restaurant.description}</p>
            </div>
        </div>
    `;
  }
}
customElements.define('detail-restaurant-template', DetailRestaurantTemplate);
