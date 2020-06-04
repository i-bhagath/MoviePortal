import { combineReducers } from "redux";
import wishListMovies from "./wishlistReducer.jsx";

 const rootReducer = function () {
  combineReducers({ wishListMovies });
};

export default rootReducer;