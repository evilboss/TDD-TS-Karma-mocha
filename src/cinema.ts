import Movies from "./movies";
import Movie from "./movie";
import {MovieRatings} from "./movies.model.interface";

let movie1;
let movie2;
let MovieList = new Movies();
movie1 = new Movie('Random Movie', MovieRatings.G);
movie2 = new Movie('Female', MovieRatings.PG);
MovieList.addMovies(movie1);
MovieList.addMovies(movie2);
console.log(MovieList.getMovies());
