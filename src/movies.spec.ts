import Movies from "./Movies";
import Person from "./person";
import Movie from "./movie";
import {expect} from 'chai';

describe('Test Movies', () => {
    let movie1;
    let movie2;
    beforeEach(() => {
        movie1 = new Movie('Random Movie', 'Rated G');
        movie2 = new Movie('Female', 'Rated PG');
    });
    it('Should Initialize a list of movies', () => {
        let MovieList = new Movies();
        MovieList.addMovies(movie1.title, movie1.rating);
        expect(MovieList.getMovies().length).equal(1);
    });
});
