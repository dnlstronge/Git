// another closure example, this time a counter: 

function makeCounter () {
    var count = 0;    // count is declared inside the makeCounter function
    function counter() { // count is accessed in the counter function
        count = count+1; // both share the same environment
        return count; // count aint local but aint global neither!
    }
    return counter; // this here is the closure
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());