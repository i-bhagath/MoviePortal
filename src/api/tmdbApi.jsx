import axios from "../../node_modules/axios";
import { api_key } from "./apiKey";

export async function getGenreList() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=67d8279af1b22ccea0421e2ea57d8e69&language=en-US"
  );
  //debugger;
  const movieList = response.data;
  return movieList;
}

export async function searchMovie(query) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?api_key=" +
      api_key +
      "&language=en-US&query=" +
      query +
      "&page=1&include_adult=false"
  );
  const movieList = response.data.results;
  console.log(movieList);
  return movieList;
}
