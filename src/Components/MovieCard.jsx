import React, { useState } from "react";
import { connect } from "react-redux";
import * as wishList from "../Redux/Actions/wishlistAction";

const MovieCard = ({ movieInfo, ...props }) => {
  const [isInWatchList, setWatchList] = useState(false);
  const [watchListCss, setWatchListCss] = useState("btn btn-success");
  const [innerTextForWatchList, setInnerTextForWatchList] = useState(
    "Add to WishList"
  );
  const img =
    "https://image.tmdb.org/t/p/w220_and_h330_face/" + movieInfo.poster_path;
  const title = movieInfo.original_title;
  const overview = movieInfo.overview;
  const releaseDate = movieInfo.release_date;
  const handleClick = (event) => {
    console.log(isInWatchList);
    console.log(isInWatchList);
    if (isInWatchList) {
      setWatchListCss("btn btn-success");
      setInnerTextForWatchList("Add to WatchList");
    } else {
      setWatchListCss("btn btn-danger");
      setInnerTextForWatchList("Remove from WatchList");
    }
    if (!isInWatchList) {
      debugger;
      props.dispatch(wishList.AddToWishlist(movieInfo));
    } else {
      debugger;
      props.dispatch(wishList.RemoveFromWishlist(movieInfo));
    }
    setWatchList(!isInWatchList);
  };
  return (
    <div className="d-flex flex-column movieCard m-4">
      <div className="d-flex justify-content-center">
        <img className="p-1" src={img} alt=""></img>
      </div>
      <div className="d-flex flex-column">
        <h5 className="d-flex justify-content-center font-weight-bold">
          {title} - {releaseDate.substring(0, 4)}
        </h5>
        <p className="m-1">{overview}</p>
      </div>
      <div className="align-self-center mt-auto p-2">
        <button className={watchListCss} onClick={handleClick}>
          {innerTextForWatchList}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MovieCard);
