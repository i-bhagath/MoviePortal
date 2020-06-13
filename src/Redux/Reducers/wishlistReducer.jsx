export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      debugger;
      return [...state, { ...action.movie }];
    case "REMOVE_FROM_WISHLIST":
      debugger;
      const newState = state.filter((movies) => movies.id !== action.movie.id);
      return newState;
    default:
      return state;
  }
}
