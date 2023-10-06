class CategoryRestaurantTemplate extends HTMLElement {
  constructor() {
    super();
  }
  set categories(categories) {
    this._categories = categories;
    this.render();
  }
  render() {
    this.innerHTML = ``;
    this._categories.forEach((category) => {
      this.innerHTML += `<p>${category.name}</p>`;
    });
  }
}
customElements.define(
  "category-restaurant-template",
  CategoryRestaurantTemplate
);
