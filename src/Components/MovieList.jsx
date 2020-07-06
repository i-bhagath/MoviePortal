import React from "react";
import MovieCardHolder from "./MovieCardHolder";
import "../css/movieCard.css";

const MovieList = ({ List }) => {
  //debugger;
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {List.length > 0 &&
        List.map((movie, i) => (
          <MovieCardHolder key={movie.id} movieInfo={movie}></MovieCardHolder>
        ))}
    </div>
  );
};

export default MovieList;
