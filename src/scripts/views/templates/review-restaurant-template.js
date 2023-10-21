import './review-template';

class ReviewRestaurantTemplate extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set customerReviews(customerReviews) {
    this._customerReviews = customerReviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._customerReviews.forEach((review) => {
      const itemReview = document.createElement('review-template');
      itemReview.review = review;
      this.appendChild(itemReview);
    });
  }
}
customElements.define('review-restaurant-template', ReviewRestaurantTemplate);