import '../views/templates/like-button-template';
import '../views/templates/liked-button-template';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
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
    const restaurant = await this._favoriteRestaurants.getRestaurants(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = '';
    const likeButtonTemplate = document.createElement('like-button-template');
    likeButtonTemplate.render();
    this._likeButtonContainer.appendChild(likeButtonTemplate);

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurants(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = '';
    const likedButtonTemplate = document.createElement('liked-button-template');
    likedButtonTemplate.render();
    this._likeButtonContainer.appendChild(likedButtonTemplate);

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurants(this._restaurant.id);
      this._renderButton();
    });
  }
};

export default LikeButtonInitiator;
