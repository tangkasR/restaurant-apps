class FoodsTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._foods.forEach((food) => {
      this.innerHTML += `<p tabindex="0">${food.name}</p>`;
    });
  }
}
customElements.define('food-template', FoodsTemplate);
