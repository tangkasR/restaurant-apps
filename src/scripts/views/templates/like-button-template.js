class LikeButtonTemplate extends HTMLElement {
  constructor() {
    super();
  }
  
  render() {
    this.innerHTML = `
        <button aria-label="like this restaurant" id="likeButton" class="like">
        </button>
    `;
  }
}
customElements.define("like-button-template", LikeButtonTemplate);
