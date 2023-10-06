class LikedButtonTemplate extends HTMLElement {
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
customElements.define("liked-button-template", LikedButtonTemplate);
