/*Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday" */

function whatday(num) {

    switch (num) {
        case 1:
        return "Sunday";
        case 2:
          return "Monday";
        case 3:
          return "Tuesday";
        case 4:
          day = "Wednesday";
        case 5:
          day = "Thursday";
        case 6:
          return "Friday"
        case 7: 
          return "Saturday" 
        case num > 7 || num < 1 || num == NaN:
        return  "Wrong, please enter a number between 1 and 7"
       
      
    
}
}

//tried a switch statement as solution
//testcode:
console.log(whatday(4));