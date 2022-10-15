//find out why this wont work:)

var nanny = NaN;
if (nanny == NaN) {
nanny = 0;
}

console.log(nanny)

// Solution

//the reason is NaN cannot be equal to Nan so:

if (isNaN(nanny)) {
    nanny = 0;
}
console.log(nanny);

// ah.....0 lives!!

if (99 == '99') {
    console.log("A number equals a string")
} else {
    console.log("no way a number equals a string")
};