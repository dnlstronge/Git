// playing with strings

// find index of 'cat' in phrase: 

const catadata = "The cat in the hat"
let index = catadata.indexOf("cat");
    console.log( "The word 'cat' is located at index: " + index); 
    //output = The word cat is located at index: 4

// find the index 'dog' in the phrase:

const dogdata = "On wednesday I took the dog to the beach "
let indexdog = dogdata.indexOf("dog");
    console.log("The word 'dog' is located at index: " + indexdog);
    //output The word 'dog' is located at index: 24

// use substring method to extract substring

const data3 = "name|phone|address";
let val = data3.substring(5, 10);
        console.log("The substring is: " + val);
        //output substring is: phone

// See what happens if you omit the 10?

let val2 = data3.substring(5);
        console.log("The substring is: " + val2);

//output is: The substring is: phone|address

//Alright now how might you break it into parts in an array instead?
let val3 = data3.split("|");
        console.log("The split array is: ", val3);
        //output: The split array is:  [ 'name', 'phone', 'address' ]
