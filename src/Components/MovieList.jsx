import React from "react";
import MovieCard from "./MovieCard";
import "../css/movieCard.css";

const MovieList = ({ List }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {List.length > 0 &&
        List.map((movie, i) => (
          <MovieCard key={i} movieInfo={movie}></MovieCard>
        ))}
    </div>
  );
};

export default MovieList;
