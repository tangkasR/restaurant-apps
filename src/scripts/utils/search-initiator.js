import RestaurantsSource from '../data/restaurants-source';

const SearchInitiator = {
  init({ button, container, errorSearchContent }) {
    button.addEventListener('click', () => {
      const searchValue = document.querySelector('#searchInput').value;
      console.log(searchValue);
      this._renderPage(
        searchValue,
        container,
        errorSearchContent,
      );
    });
  },

  async _renderPage(searchValue, container, errorSearchContent) {
    const resultSearchRestaurant = await RestaurantsSource.searchRestaurant(searchValue);
    console.log(resultSearchRestaurant);
    if (resultSearchRestaurant.length !== 0) {
      // eslint-disable-next-line no-param-reassign
      container.restaurants = resultSearchRestaurant;
    } else {
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = '';
      // eslint-disable-next-line no-param-reassign
      errorSearchContent.searchValue = searchValue;
      container.appendChild(errorSearchContent);
    }
  },
};

export default SearchInitiator;
