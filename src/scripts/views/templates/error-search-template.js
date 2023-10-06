class ErrorSearchTemplate extends HTMLElement {
  constructor() {
    super();
  }

  set searchValue(searchValue) {
    this._searchValue = searchValue;
    this.render();
  }

  render() {
    this.innerHTML = `
        <p class="error-message">${this._searchValue} not found!</p>
    `;
  }
}
customElements.define("error-search-template", ErrorSearchTemplate);
