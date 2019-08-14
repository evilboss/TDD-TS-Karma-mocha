export default class Movie {
    private _title: string;
    private _rating: string;


    private setTitle(title: string) {
        this._title = title;
    }

    private getTitle(): string {
        return this._title;
    }

    private getRating(): string {
        return this._rating;
    }

    public setRating(value: string) {
        this._rating = value;
    }

    public getMovie(): any {
        return {title: this.getTitle(), rating: this.getRating()}
    }

    constructor(title, rating) {
        this.setTitle(title);
        this.setRating(rating);
    }


}
