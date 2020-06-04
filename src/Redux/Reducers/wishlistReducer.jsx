export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state.movies, { ...action.movie }];
    default:
      return state;
  }
}
