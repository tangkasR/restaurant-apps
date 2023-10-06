class FoodsTemplate extends HTMLElement {
  constructor() {
    super();
  }
  set foods(foods) {
    this._foods = foods;
    this.render();
  }
  render() {
    this.innerHTML = ``;
    this._foods.forEach((food) => {
      this.innerHTML += `<p>${food.name}</p>`;
    });
  }
}
customElements.define("food-template", FoodsTemplate);
