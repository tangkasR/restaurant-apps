import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class CardRestaurantTemplate extends HTMLElement {
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
        <div class="card" tabindex="-1">
            <p tabindex="0">${this._restaurant.city}</p>
            <img class="lazyload" tabindex="0" data-src="${CONFIG.BASE_IMAGE_URL
              + this._restaurant.pictureId}"
            alt="gambar restaurant ${this._restaurant.name}"/>
            <p tabindex="0">Rating: ${this._restaurant.rating}</p>
            <p tabindex="0">
            <a href="/#/detail/${this._restaurant.id}">
            ${this._restaurant.name}
            </a>
            </p>
        </div>
    `;
  }
}
customElements.define('card-restaurant-template', CardRestaurantTemplate);
