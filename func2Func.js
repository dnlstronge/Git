var passengers = [
    {name: "Dr Steve", paid: false, ticket: "firstclass"},
    {name: "Ms Round", paid: true, ticket: "coach"},
    {name: "Mr Jefferson", paid: true, ticket: "premium"},
    {name: "Lord Maltese", paid: true, ticket: "firstclass"}


]
var allCanFly = processPassengers(passengers, noFly);
if (!allCanFly) {console.log("The plane can't take off, there is a passenger on the No Fly list")}

var allPaid = processPassengers(passengers, checkPaid);
if (!allPaid) {
    console.log("The plane can't take off; someone hasn't paid the troll toll");
}
// what if the drinks options become more complex? this could get messy...
//would it not be better to have the function return functions?
// make the function accept more than one order
function serveCustomer(passenger) {
   var getDrinkOrderFunction = createDrinkOrder(passenger);
   var getDinnerOrderFunction = createDinnerOrder(passenger);
   getDrinkOrderFunction();
   getDinnerOrderFunction()
   getDrinkOrderFunction();
   getDrinkOrderFunction();
   // show movie
   getDrinkOrderFunction();
    //clean up
}

// create order returns a function which takes the order
function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Care for some champagne?");
        };
        } else if (passenger.ticket === "premium") {
            orderFunction = function() {
                alert("Wine, soda or water?")
            };
        } else {
            orderFunction = function() {
                alert("soda or water?")
            };
        }
        return orderFunction;
    }

    // DINNER ORDER 

    function createDinnerOrder(passenger) {
        var orderFunction;
        if (passenger.ticket === "firstclass") {
            orderFunction = function() {
                alert("Chicken or pasta?");
            };
            } else if (passenger.ticket === "premium"){
                orderFunction = function() {
                    alert("Snacks or cheese plate?")
                };
            }
                else {
                    orderFunction = function() {
                        alert("Peanuts or pretzels?");
                    };
                }
            
            return orderFunction;
        }






    // iterate over passengers
function servePassengers(passengers) {
    for (var i = 1; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}


function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
        return false;
        }
    }
    return true;
}


//nofly or paid?

function noFly(passengers) {
 return (passengers.name === "Dr Proctor");
}

function checkPaid(passengers) {
    return (!passengers.paid)
}



/* would it not be better to create one function to iterate? and then pass
a function to a function? */ // (now implemented)

// tested 'Dr Robotnik@ returns expected response as does a false value for paid
// on any of the passengers in the array
