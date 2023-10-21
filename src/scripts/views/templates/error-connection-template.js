class ErrorConnectionTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
        <p class="error-message" tabindex="0"> Ooopss! it looks like you're offline :(</p>
      `;
  }
}
customElements.define('error-connection-template', ErrorConnectionTemplate);
