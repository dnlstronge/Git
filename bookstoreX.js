class Media {
    constructor(keyOne) {
      this._keyOne = title;
      this._keyTwo = false;
      this._keyThree = [];
    }
    get keyTwo() {
      return this._keyTwo;
    }
    get keyThree() {
      return this._keyThree;
    }
  toggleCheckOutStatus() {
       this._isCheckedOut = !this.isCheckedOut; 
    }
  
  
    set keyTwo(newKeyTwo) {
      this.keyTwo = newKeyTwo;
    }
  }