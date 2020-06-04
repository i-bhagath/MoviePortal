export function AddToWishlist(movie) {
  return {
    type: "ADD_TO_WISHLIST",
    movie,
  };
}

export function RemoveFromWishlist(movie) {
  return {
    type: "REMOVE_FROM_WISHLIST",
    movie,
  };
}
