import Movies from "./movies";
import Movie from "./movie";
import {MovieRatings} from "./movies.model.interface";

describe('Test Movies', () => {
    let movie1;
    let movie2;
    let MovieList = new Movies();

    beforeEach(() => {
        movie1 = new Movie('Random Movie', MovieRatings.G);
        movie2 = new Movie('Sample Movie', MovieRatings.PG);
        MovieList.addMovies(movie1);
        MovieList.addMovies(movie2);

    });
    it('Should Initialize a list of movies', () => {
    });
    it('Should get title', () => {
        expect(movie1.getTitle()).toBe('Random Movie');
    });
    it('Should get rating', () => {
        expect(movie1.getRating()).toBe(MovieRatings.G);
    });
});
