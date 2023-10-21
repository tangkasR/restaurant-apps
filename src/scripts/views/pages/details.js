import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import NewReviewInitiator from '../../utils/new-review-initiator';
import '../templates/error-connection-template';
import '../templates/detail-restaurant-template';
import '../templates/category-restaurant-template';
import '../templates/food-menu-template';
import '../templates/drink-menu-template';
import '../templates/review-restaurant-template';

const Detail = {
  async render() {
    return `
    <div id="main-content-detail" tabindex="-1">
      <div class="loading-indicator"><img src="./icons/loading-noBG.gif"/></div>
      <div id="restaurantDetail" class="restaurant_detail" tabindex="-1"></div>
      <category-restaurant-template id="categoryDetail" tabindex="-1"></category-restaurant-template>
      <div id="MenuAndlikeButtonContainer">
        <div class="menus-content">
          <h2 tabindex="0">Foods</h2>
          <food-template id="foodsContainer">
          </food-template>
        </div>
        <div class="menus-content">
          <h2 tabindex="0">Drinks</h2>
          <drink-template id="drinksContainer">
          </drink-template>
        </div>
        <div id="btnLikeContainer">
        </div>
      </div>
      <div class="wrap-review-content">
        <div class="review-content">
          <div class="head-review-content">
            <h2>Review</h2>
            <div class="add-review-content">
                <label for="inputName">Name</label>
                <input type="text" id="inputName" name="inputName" placeholder="Input Name">
                <label for="inputReview">Review</label>
                <input type="text" id="inputReview" name="inputReview" placeholder="Input Review">
                <button id="btnSave" aria-label="Save new review"></button>
            </div>
          </div>
          <review-restaurant-template id="reviewContainer">
          </review-restaurant-template>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line prefer-const
    let mainContentDetail = document.querySelector('#main-content-detail');
    const loadingIndicator = mainContentDetail.querySelector('.loading-indicator');
    try {
      loadingIndicator.style.display = 'block';

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantsSource.detailRestaurant(url.id);

      if (restaurant !== null) {
        loadingIndicator.style.display = 'none';
        const restaurantContainer = document.querySelector('#restaurantDetail');
        const detailRestaurant = document.createElement(
          'detail-restaurant-template',
        );
        detailRestaurant.restaurant = restaurant;
        restaurantContainer.appendChild(detailRestaurant);

        const categoriesRestaurant = document.querySelector(
          'category-restaurant-template',
        );
        categoriesRestaurant.categories = restaurant.categories;

        const drinksContainer = document.querySelector('drink-template');
        drinksContainer.drinks = restaurant.menus.drinks;

        const foodsContainer = document.querySelector('food-template');
        foodsContainer.foods = restaurant.menus.foods;

        const reviewContainer = document.querySelector(
          'review-restaurant-template',
        );
        reviewContainer.customerReviews = restaurant.customerReviews;

        const btnContainer = document.querySelector('#btnLikeContainer');
        LikeButtonInitiator.init({
          likeButtonContainer: btnContainer,
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            rating: restaurant.rating,
            pictureId: restaurant.pictureId,
            city: restaurant.city,
          },
        });

        NewReviewInitiator.init({
          id: url.id.toString(),
          name: document.querySelector('#inputName'),
          review: document.querySelector('#inputReview'),
          button: document.querySelector('#btnSave'),
        });
      }
    } catch (error) {
      loadingIndicator.style.display = 'none';
      const errorConnection = document.createElement(
        'error-connection-template',
      );
      errorConnection.render();
      mainContentDetail.innerHTML = '';
      mainContentDetail.appendChild(errorConnection);
    }
  },
};

export default Detail;
