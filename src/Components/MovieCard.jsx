import React from "react";
import { connect } from "react-redux";


const MovieCard = ({ movieInfo, ...props }) => {
  console.log(movieInfo.original_title);
  console.log(movieInfo.isInWatchList);
  const img =
    "https://image.tmdb.org/t/p/w220_and_h330_face/" + movieInfo.poster_path;
  const title = movieInfo.original_title;
  const overview = movieInfo.overview;
  const releaseDate = movieInfo.release_date;

  let initialCSSValue = "btn btn-danger";
  let intialTextValue = "Remove from WatchList";

  if (!movieInfo.isInWatchList) {
    initialCSSValue = "btn btn-success";
    intialTextValue = "Add to WatchList";
  }

  return (
    <div className="d-flex flex-column movieCard m-4">
      <div className="d-flex justify-content-center">
        <img className="p-1" src={img} alt=""></img>
      </div>
      <div className="d-flex flex-column">
        <h5 className="d-flex justify-content-center font-weight-bold">
          {title} - {releaseDate? releaseDate.substring(0, 4):""}
        </h5>
        <p className="m-1">{overview}</p>
      </div>
      <div className="align-self-center mt-auto p-2">
        <button className={initialCSSValue} value={!movieInfo.isInWatchList} onClick={(event) =>props.onClick(event)}>
          {intialTextValue}
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
