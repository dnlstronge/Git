//create program which returns solutions with highest scores from an array
var highScore = 69;  
console.log(highScore);
// new function

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
    ];

var scores = [60, 50, 60, 58, 54, 54, 
     58, 50, 52, 54, 48, 69,
     34, 55, 51, 52, 44, 51,
     69, 64, 66, 55, 52, 61,
     46, 31, 57, 52, 44, 18,
     41, 53, 55, 61, 51, 44];





// globals


     
var numTests = scores.length;
// console.log(numTests); output: 36
var numHigh = Math.max.apply(Math, scores);
// console.log(numHigh);  output 69
var checkArray = find(numHigh,scores);
// console.log(checkArray); output: 11, 18
var mostCostEffective = getMostEffectiveSolution(scores, costs, numHigh);

// Function (checks value + checks array for matches)

function getMostEffectiveSolution (scores, costs, numHigh) {
    var cost = 100;
    var index;

    for (var i = 0; i < scores.length; i++) {
    if (scores[i] == numHigh) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}; 





function find(numHigh, scores) {
    var results = [];
    var idx = scores.indexOf(numHigh);
    while (idx != -1) {
        results.push(' #'+idx);
        idx = scores.indexOf(69, idx + 1);
    }
    return results;
}



for (i = 0; i < scores.length; i++)



// Lists requested data

console.log("Bubble solution #" + (i+1) + " score: " + scores[i]);
console.log("Bubble tests: " + numTests);
console.log("Highest bubble score: " + numHigh);
console.log("Solutions with highest score: " + checkArray);
console.log('Bubble solution #' + mostCostEffective + " is the most cost effective");








