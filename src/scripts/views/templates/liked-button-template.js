class LikedButtonTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
      <button aria-label="unlike this restaurant" id="likeButton" class="liked">
      </button>
    `;
  }
}
customElements.define('liked-button-template', LikedButtonTemplate);
