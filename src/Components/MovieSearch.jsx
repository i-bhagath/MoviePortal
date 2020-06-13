import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { searchMovie } from "../api/tmdbApi";
import MovieList from "./MovieList";
import MoviePortalHeader from "./MovieHeader";
import { connect } from "react-redux";
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
    this.setState({ searchList: sortedList });
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
        {this.props.movies.length>0 && 
          <div className="movieCount d-flex justify-content-center align-items-center">
            {this.props.movies.length}
          </div>
         
        }
        <MovieList List={this.state.searchList}></MovieList>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.wishListMovies,
  };
};

export default connect(mapStateToProps)(MovieSearch);
