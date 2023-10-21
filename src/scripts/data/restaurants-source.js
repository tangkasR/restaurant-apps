import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async getRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANTS);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      return error;
    }
  }

  static async searchRestaurant(input) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(input));
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  static async inputReview(newReview) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      };

      const response = await fetch(API_ENDPOINT.REVIEW, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }
}

export default RestaurantsSource;
