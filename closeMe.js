
//write a simple code which helps explain closures

var closures = 9
var closures2 = 10

var closures3 = function testme() {

    // variabless x, y are declared inside testme
    let x = (closures + 1)
    let y = (closures2 + 1)
    // new function expression beep is nested inside testme
    function beep () {
        if(x + y < 17) {return false;}
     else (x + y == 17); {
    /*x + y are not declared in this function body
    but because they are not global and declared inside the function beep is nested in
    they are available the environment */
     return true;
    }
}
return beep();
}
console.log(closures3());

// test: change values for closures 1/2, expected output T/F (clear)