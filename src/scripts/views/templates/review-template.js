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
            <p tabindex="0" class="nameReview">Name: ${this._review.name}</p>
            <p tabindex="0"class="contentReview">Review: ${this._review.review}</p>
        </div>
    `;
  }
}
customElements.define('review-template', ReviewTemplate);
