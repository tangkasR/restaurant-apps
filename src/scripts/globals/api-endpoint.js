import CONFIG from './config';
 
const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (input) => `${CONFIG.BASE_URL}search?q=${input}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};
 
export default API_ENDPOINT;