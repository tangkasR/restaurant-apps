// import NowPlaying from '../views/pages/now-playing';
// import Upcoming from '../views/pages/upcoming';
import Detail from "../views/pages/details";
import Restaurants from "../views/pages/restaurants";
import TopRatedRestaurants from "../views/pages/top-rated-restaurant";
import Like from "../views/pages/like";

const routes = {
  "/": Restaurants, // default page
  "/top-rated": TopRatedRestaurants,
  "/like": Like,
  "/detail/:id": Detail
};

export default routes;
