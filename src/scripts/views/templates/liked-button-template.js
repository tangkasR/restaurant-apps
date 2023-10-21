class LikedButtonTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
      <button aria-label="unlike this restaurant" id="likeButton" class="liked">
      <img src="./icons/like-after-noBG.png" />
      </button>
    `;
  }
}
customElements.define('liked-button-template', LikedButtonTemplate);
