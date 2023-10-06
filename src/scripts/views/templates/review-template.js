import CONFIG from "../../globals/config";

class ReviewTemplate extends HTMLElement {
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
            <p>Date: ${this._review.date}</p>
            <p>Name: ${this._review.name}</p>
            <p>Review: ${this._review.review}</p>
        </div>
    `;
  }
}
customElements.define("review-template", ReviewTemplate);
