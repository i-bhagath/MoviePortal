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
    movieListFromAPI: [],
    watchList:[]
  };

  componentWillReceiveProps(props) {
    debugger;
    const watchList = props.watchListMovies;
    this.createMovieList(watchList);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.getMoviesFromAPI();
    await this.createMovieList(this.state.watchList);
  };

  getMoviesFromAPI = async () => {
    const movieListFromAPI = await searchMovie(this.state.searchValue);
    this.setState({ movieListFromAPI });
  };

  createMovieList = async (watchListMovies = []) => {
    const searchList = this.state.movieListFromAPI;
    const updatedSearchList = searchList.map((movie) => {
      const movieyear = movie.release_date
        ? movie.release_date.substring(0, 4)
        : "";
      const isInWatchList = false;
      return { ...movie, movieyear: movieyear, isInWatchList: isInWatchList };
    });

    const orderedSearchList = this.orderMovieList(
      updatedSearchList,
      ["movieyear"],
      ["desc"]
    );

    const movieListwithWatchList = this.combineList(
      orderedSearchList,
      watchListMovies
    );
    debugger;
    this.setState({watchList:watchListMovies });
    this.setState({ searchList: movieListwithWatchList });
  };

  orderMovieList = (movieList, orderArray, byArray) => {
    const sortedList = _.orderBy(movieList, orderArray, byArray);
    debugger;
    return sortedList;
  };

  combineList = (updatedSearchList, watchListMovies) => {
    debugger;
    if (watchListMovies.length > 0) {
      let newArray = updatedSearchList.map((element) => {
        let movie = watchListMovies.filter((x) => x.id === element.id);
        if (movie.length > 0) {
          element.isInWatchList = true;
        }
        return element;
      });
      debugger;
      return newArray;
    } else {
      return updatedSearchList;
    }
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
        {this.props.watchListMovies &&
          this.props.watchListMovies.length > 0 && (
            <div className="movieCount d-flex justify-content-center align-items-center">
              {this.props.watchListMovies.length}
            </div>
          )}
        <MovieList List={this.state.searchList}></MovieList>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    watchListMovies: state.wishListMovies,
  };
};

export default connect(mapStateToProps)(MovieSearch);
