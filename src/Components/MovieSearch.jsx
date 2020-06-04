import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { searchMovie } from "../api/tmdbApi";
import MovieList from "./MovieList";
import MoviePortalHeader from "./MovieHeader";
class MovieSearch extends Component {
  state = {
    searchValue: "",
    searchList: [],
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const searchList = await searchMovie(this.state.searchValue);
    this.setState({ searchList });
    console.log(searchList);
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
