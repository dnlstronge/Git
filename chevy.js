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
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            console.log(this.make + " " +
            this.model + " goes ZOOM ZOOM!");
    } else {
        console.log("You need to start the engine first");
    }

}
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
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            console.log(this.make + " " +
            this.model + " goes ZOOM ZOOM!");
    } else {
        console.log("You need to start the engine first");
    }

}
    

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
    started: false,
    fuel: 0,
 
    start: function() {
        if (this.fuel >= 1) {this.started = true}
        else {console.log("The tank is empty, better fill up first!"); this.started = false}
    },
    stop: function() {
        this.started = false;
    },



    drive: function() {
        if (this.started = true && this.fuel > 0 ) {
           
                console.log(this.make + " " +
            this.model + " goes ZOOM ZOOM!");
        this.fuel = this.fuel -1;
        } else if (this.started = true && this.fuel < 1) { console.log("uh oh, out of fuel")
            this.stop()
        } else {
        console.log("You need to start the engine first")
        this.stop();
    }
   },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
        console.log("glug, glug, " + amount + " fuel added")
        this.stop();
    }
};
var taxi = {
        make: "Webville Motors",
        model: "Taxi",
        year: 1955,
        color: "yeller",
        passengers: 4,
        convertible: false,
        mileage: 281341,
        started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes ZOOM ZOOM!");
    } else {
        console.log("You need to start the engine first");
    }

}
    

}

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


// tests

fiat.addFuel(2);
fiat.drive();
fiat.stop()

fiat.drive();