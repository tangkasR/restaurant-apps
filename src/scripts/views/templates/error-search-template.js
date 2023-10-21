class ErrorSearchTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set searchValue(searchValue) {
    this._searchValue = searchValue;
    this.render();
  }

  render() {
    this.innerHTML = `
        <p class="error-message" tabindex="0">${this._searchValue} not found!</p>
    `;
  }
}
customElements.define('error-search-template', ErrorSearchTemplate);
