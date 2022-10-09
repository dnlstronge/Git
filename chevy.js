// objects exercise - create chevy
// experiment with objects

var chevy = {
    make: "Chevrolet",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
};

// add new obj for cadillac

var cadi = {
    make: "General Motors",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,

}

// new obj - fiat

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,

}
fiat.needsWashing = true;

fiat.mileage = 10000;
fiat.mileage = 1000;

var miles = fiat.mileage;
        if (miles < 2000) {
    console.log("Buy it!");
}       else {
    console.log("Don't Buy it!")
}

if (fiat.year < 1965) {
    classic = true;
}
for (var i = 0; i < fiat.passengers; i++) {
    console.log(i);
};

console.log(fiat);
console.log (classic);
