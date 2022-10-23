/*Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday" */

function whatday(num) {

if (num <= 7 && num >= 1) { 

    switch (num) {
        case 1:
        return "Sunday";
        case 2:
          return "Monday";
        case 3:
          return "Tuesday";
        case 4:
          return "Wednesday";
        case 5:
          return "Thursday";
        case 6:
          return "Friday";
        case 7: 
          return "Saturday"; 
}
} else {
    return "Wrong, please enter a number between 1 and 7";
}
};

//tried a switch statement as solution
//seems to work after if else statement also added to catch numbers outside 1-7
//testcode:
console.log(whatday(-6));