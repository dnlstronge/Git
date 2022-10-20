var passengers = [
    {name: "Dr Steve", paid: false, ticket: "firstclass"},
    {name: "Ms Round", paid: true, ticket: "coach"},
    {name: "Mr Jefferson", paid: true, ticket: "coach"},
    {name: "Lord Maltese", paid: true, ticket: "firstclass"}


]
var allCanFly = processPassengers(passengers, noFly);
if (!allCanFly) {console.log("The plane can't take off, there is a passenger on the No Fly list")}

var allPaid = processPassengers(passengers, checkPaid);
if (!allPaid) {
    console.log("The plane can't take off; someone hasn't paid the troll toll");
}

function serveCustomer(passenger) {
    //get drink order
    //get dinner order
    //pick up rubbish
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
