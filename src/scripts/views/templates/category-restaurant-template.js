class CategoryRestaurantTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._categories.forEach((category) => {
      this.innerHTML += `<p tabindex="0">${category.name}</p>`;
    });
  }
}
customElements.define(
  'category-restaurant-template',
  CategoryRestaurantTemplate,
);
