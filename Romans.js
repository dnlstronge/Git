// Convert given roman numeral to an integer
//
var toInt = function(s) {
    var mapSym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0;

    for (let i = 0; i < s.length; i++){
    let sym1 = mapSym[s[i]]; /// the iteration is giving you a letter each time,
    let sym2 = mapSym[s[i+1]]; // that letter provides a value based on mapsym

    //you then use that value to determine whether its less than the next
    //an if it is do something, if it's not do something else
    //otherwise return only the value. cool huh?

    if (sym1 < sym2) {total += sym2 - sym1
        i++}
    else {
        total += sym1
    
    
      }

    }
    return total;
}

console.log(toInt('MCLXIV'));
