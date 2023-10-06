import RestaurantsSource from "../data/restaurants-source.js";

const NewReviewInitiator = {
  init({ id, name, review, button }) {
    button.addEventListener("click", () => {
      this._inputNewReview(id, name, review);
    });
  },

  async _inputNewReview(id, name, review) {
    const newReview = {
      id: id,
      name: name.value,
      review: review.value
    };
    const newReviewItem = await RestaurantsSource.inputReview(newReview);
    console.log(newReviewItem);
    location.reload();
  }
};

export default NewReviewInitiator;
