import Movie from "./movie";

export default class Movies {
    private _Movies = [];
    public getMovies = (): Array<any> => {
        return this._Movies;
    };
    public addMovies = (Movie): void => {
        this._Movies.push(Movie);
    };
}
