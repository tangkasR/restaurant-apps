class LoadingTemplate extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
          <div class="loading">
            <img src="./icons/loading-noBG.gif" alt="loading"/>
          </div>
      `;
  }
}
customElements.define("loading-template", LoadingTemplate);
