var passengers = [
    {name: "Dr Proctor", paid: true},
    {name: "Ms Round", paid: true},
    {name: "Mr Jefferson", paid: false},
    {name: "Lord Maltese", paid: true}


]

// checks if paid
function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (!passengers.paid) {
            return false;
        }
        return true;
    }
}