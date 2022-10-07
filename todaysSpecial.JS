// Objects  - create getters and setters for properties in menu object


const menu = {
    _meal: '',
    _price: 0,
    
    // set 

    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string')
    {
      return this._meal = mealToCheck;
    }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number')
      return this._price = priceToCheck;
    },

    //get

    get todaysSpecial() {
      if (this._meal && this._price){
        return `Today's special is: ${this._meal} price: £${this._price}`
      }
      else {
        return 'Meal or price not entered'
      }
   }
   };
   
   //Test - meal requires a string and price requires number - results in error msg
   //Test - Tested valid inputs and program functions
    
   menu.meal = 'Pizza'
   menu.price = 'fluu'
   
   console.log(menu.todaysSpecial);
   