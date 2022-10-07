//create program which returns solutions with highest scores from an array


// Globals

var scores = [60, 50, 60, 58, 54, 54, 
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
var numTests = scores.length
// console.log(numTests); output: 36
var numHigh = Math.max.apply(Math, scores);
// console.log(numHigh);  output 69
var checkArray = find(numHigh,scores);
// console.log(checkArray); output: 11, 18


  // Function (checks array for matches)

function find(numHigh, scores) {
    var results = [];
    var idx = scores.indexOf(numHigh);
    while (idx != -1) {
        results.push(' #'+idx);
        idx = scores.indexOf(69, idx + 1);
    }
    return results;
}

// Lists requested data

for (i = 0; i < scores.length; i++)
console.log("Bubble solution #" + (i+1) + " score: " + scores[i]);
console.log("Bubble tests: " + numTests);
console.log("Highest bubble score: " + numHigh);
console.log("Solutions with highest score: " + checkArray);








