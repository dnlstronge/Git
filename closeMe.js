
//write a simple code which helps explain closures

var closures = 1
var closures2 = 2

var closures3 = function testme() {

    // variabless x, y are declared inside testme
    let x = closures + 1;
    let y = closures2 + 1;
    // new function expression beep is nested inside testme
    function beep () {
        if(x < y) {return false;}
     else if (x > y); {
    /*x + y are not declared in this function body
    but because they are not global and declared inside the function 'beep' is nested in
    they are available the environment */
     return true;
    }
    
}
return beep();
}

//test code
console.log(closures3());


// test: change values for closures 1/2, expected output T/F (clear)
// slight issue with if statement (changed)