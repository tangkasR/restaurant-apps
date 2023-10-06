class DrinkTemplate extends HTMLElement {
  constructor() {
    super();
  }
  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }
  render() {
    this.innerHTML = ``;
    this._drinks.forEach((drink) => {
      this.innerHTML += `<p>${drink.name}</p>`;
    });
  }
}
customElements.define("drink-template", DrinkTemplate);
