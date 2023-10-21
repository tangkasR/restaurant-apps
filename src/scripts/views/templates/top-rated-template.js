import CONFIG from '../../globals/config';

class TopRatedTemplate extends HTMLElement {
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
        <div class="container-top-rated">
            <div class="img">
                <p tabindex="0">${this._restaurant.city}</p>
                <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" 
                alt="${this._restaurant.name}" tabindex="0">
            </div>
            <div class="content-top-rated">
                <p tabindex="0">Rating: ${this._restaurant.rating}</p>
                <a href="/#/detail/${this._restaurant.id}">
                ${this._restaurant.name}
                </a>
                <p tabindex="0">${this._restaurant.description}</p>
            </div>
        </div>
    `;
  }
}
customElements.define('top-rated-template', TopRatedTemplate);
