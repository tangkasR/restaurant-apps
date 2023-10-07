import RestaurantsSource from "../data/restaurants-source.js";

const SearchInitiator = {
  init({ button, container, errorSearchContent }) {
    button.addEventListener("click", () => {
      const searchValue = document.querySelector("#searchInput").value;
      console.log(searchValue);
      this._renderPage(
        searchValue,
        container,
        errorSearchContent
      );
    });
  },

  async _renderPage(searchValue, container, errorSearchContent) {
    const resultSearchRestaurant = await RestaurantsSource.searchRestaurant(
      searchValue
    );
    console.log(resultSearchRestaurant);
    if (resultSearchRestaurant.length !== 0) {
      container.restaurants = resultSearchRestaurant;
    } else {
      container.innerHTML = '';
      errorSearchContent.searchValue = searchValue;
      container.appendChild(errorSearchContent);
    }
  }
};

export default SearchInitiator;
