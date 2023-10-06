import FavoriteRestaurantsIdb from "../data/favorite-restaurants-idb";
import "../views/templates/like-button-template.js";
import "../views/templates/liked-button-template.js";
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantsExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantsExist(id) {
    const restaurant = await FavoriteRestaurantsIdb.getRestaurants(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = "";
    const likeButtonTemplate = document.createElement("like-button-template");
    likeButtonTemplate.render();
    this._likeButtonContainer.appendChild(likeButtonTemplate);

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantsIdb.putRestaurants(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = "";
    const likedButtonTemplate = document.createElement("liked-button-template");
    likedButtonTemplate.render();
    this._likeButtonContainer.appendChild(likedButtonTemplate);

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantsIdb.deleteRestaurants(this._restaurant.id);
      this._renderButton();
    });
  }
};

export default LikeButtonInitiator;
