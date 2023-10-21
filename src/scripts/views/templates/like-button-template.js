class LikeButtonTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
        <button aria-label="like this restaurant" id="likeButton" class="like">
        <img src="./icons/like-before-noBG.png" />
        </button>
    `;
  }
}
customElements.define('like-button-template', LikeButtonTemplate);
