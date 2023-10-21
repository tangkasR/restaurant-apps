class DrinkTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._drinks.forEach((drink) => {
      this.innerHTML += `<p tabindex="0">${drink.name}</p>`;
    });
  }
}
customElements.define('drink-template', DrinkTemplate);
