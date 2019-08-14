import Movie from "./movie";

export default class Movies {
    private _Movies = [];
    public getMovies = (): Array<any> => this._Movies;
    public addMovies = (title, rating): void => {
        this._Movies.push(new Movie(title, rating));
    };
}
