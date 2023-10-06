class ErrorConnectionTemplate extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
        <p class="error-message"> Ooopss! it looks like you're offline :(</p>
      `;
  }
}
customElements.define("error-connection-template", ErrorConnectionTemplate);
