class Media {
    constructor() {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value) {
      this.isCheckedOut = value
    }
    //METHOD
  toggleCheckOutStatus() {
       this._isCheckedOut = !this.isCheckedOut; 
    }
  
  getAverageRating() {
  let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }
  addRating(value) {
      this.ratings.push(value)
  }
  }
  class Book extends Media{
    constructor(author, title, pages) {
      super(title);
      this.author = author;
      this.pages = pages
    }