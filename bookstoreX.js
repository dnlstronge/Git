class Media {
    constructor() {
      this._title = 'title';
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
      this._author = author;
      this._pages = pages;
    }
    get author() {return this._author};
    get pages() {return this._pages};
  }
  class Movie extends Media {
    constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime; 
  }
  get director() {return this._director};
  get runTime() {return this._runTime};
  }
  // new instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 644);
  // new instance
  const speed = new Movie('Jan de Bont', 'Speed', 116); 
  
  ///tests
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  //test array
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  //test average works
  console.log(historyOfEverything.getAverageRating());
  
  //test speed instance
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  //test Array
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  //test average works
  console.log(speed.getAverageRating());
  // tests (CLEAR)
  