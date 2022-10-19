var passengers = [
    {name: "Dr Proctor", paid: true},
    {name: "Ms Round", paid: true},
    {name: "Mr Jefferson", paid: false},
    {name: "Lord Maltese", paid: true}


]

// checks if paid
function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
        
    }
    return true;
}
function checkNoFy (passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (noFlyList(passengers[i].name)) {
            return false;
        }
        
    }
    return true;
}
function printPassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name)
    }
    return true; // dont care about the return just the iteration
}
/* would it not be better to create one function to iterate? and then pass
a function to a function? */
