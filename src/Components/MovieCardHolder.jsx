import React from "react";
import * as wishList from "../Redux/Actions/wishlistAction";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MovieCardHolder = ({ movieInfo, ...props }) => {
  //   useEffect(() => console.log("value changed!"), [
  //     props.movies.length >0? props.movies.filter((movies) => movies.id == movieInfo.id):0,
  //   ]);

  const handleClick = (event) => {
    debugger;
    const isInWatchList = event.target.value === "true" ? true : false;
    const updatedMovieInfo = { ...movieInfo, isInWatchList: isInWatchList };
    EditWatchList(updatedMovieInfo);
  };

  const EditWatchList = (updatedMovieInfo) => {
    console.log(updatedMovieInfo.isInWatchList);
    updatedMovieInfo.isInWatchList
      ? props.dispatch(wishList.AddToWishlist(updatedMovieInfo))
      : props.dispatch(wishList.RemoveFromWishlist(updatedMovieInfo));
    //: props.dispatch(wishList.AddToWishlist(updatedMovieInfo));
  };

  return <MovieCard onClick={handleClick} movieInfo={movieInfo}></MovieCard>;
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MovieCardHolder);
