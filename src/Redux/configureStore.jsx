import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/combineReducer";
import reduximmutablestateinvariant from "redux-immutable-state-invariant";

const configureStore = function (initialstate) {
  const composeEnchancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialstate,
    composeEnchancer(applyMiddleware(reduximmutablestateinvariant()))
  );
};

export default configureStore;
