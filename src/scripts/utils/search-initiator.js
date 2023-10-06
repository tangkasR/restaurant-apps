import RestaurantsSource from "../data/restaurants-source.js";

const SearchInitiator = {
  init({ button, container, mainContainer, errorSearchContent }) {
    button.addEventListener("click", () => {
      const searchValue = document.querySelector("#searchInput").value;
      console.log(searchValue);
      this._renderPage(
        searchValue,
        container,
        mainContainer,
        errorSearchContent
      );
    });
  },

  async _renderPage(searchValue, container, mainContainer, errorSearchContent) {
    const resultSearchRestaurant = await RestaurantsSource.searchRestaurant(
      searchValue
    );
    console.log(resultSearchRestaurant);
    if (resultSearchRestaurant.length !== 0) {
      container.restaurants = resultSearchRestaurant;
    } else {
      mainContainer.innerHTML = "";
      errorSearchContent.searchValue = searchValue;
      mainContainer.appendChild(errorSearchContent);
    }
  }
};

export default SearchInitiator;
