import { combineReducers } from "redux";
import wishListMovies from "./wishlistReducer.jsx";

const rootReducer = combineReducers({ wishListMovies });

export default rootReducer;
