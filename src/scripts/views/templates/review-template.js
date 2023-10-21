class ReviewTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="reviewContent">
            <p tabindex="0">Date: ${this._review.date}</p>
            <p tabindex="0">Name: ${this._review.name}</p>
            <p tabindex="0">Review: ${this._review.review}</p>
        </div>
    `;
  }
}
customElements.define('review-template', ReviewTemplate);
