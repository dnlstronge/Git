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
    drive: function() {
        console.log("ZOOM ZOOM!")
    }

};

var taxi = {
        make: "Webville Motors",
        model: "Taxi",
        year: 1955,
        color: "yeller",
        passengers: 4,
        convertible: false,
        mileage: 281341
    

};

//new exercise - add fucntion to determine whether user purchases

function prequal(car) {
    if (car.mileage > 10000) {
        return false;

    } else if (car.mileage > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(chevy);
if (worthALook) {
    console.log("Yo, yo, yo check out this " + chevy.make + " " + chevy.model)
} else {
    console.log("You should really pass on the " + chevy.make + " " + chevy.model)
}

fiat.drive()
