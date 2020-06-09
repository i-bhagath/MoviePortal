import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { searchMovie } from "../api/tmdbApi";
import MovieList from "./MovieList";
import MoviePortalHeader from "./MovieHeader";
import _ from "lodash";

class MovieSearch extends Component {
  state = {
    searchValue: "",
    searchList: [],
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const searchList = await searchMovie(this.state.searchValue);
    const updatedSearchList = searchList.map((movie) => {
      const movieyear = movie.release_date
        ? movie.release_date.substring(0, 4)
        : "";
      return { ...movie, movieyear: movieyear };
    });
    const sortedList = _.orderBy(updatedSearchList, ["movieyear"], ["desc"]);
    console.log(updatedSearchList);
    console.log(sortedList);
    this.setState({ searchList: sortedList});
  };

  handleChange = (event) => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  };

  render() {
    return (
      <>
        <MoviePortalHeader></MoviePortalHeader>
        <SearchBox
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          searchValue={this.state.searchValue}
        ></SearchBox>
        <hr className="my-4"></hr>
        <MovieList List={this.state.searchList}></MovieList>
      </>
    );
  }
}

export default MovieSearch;
