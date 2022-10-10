// Function to to check whether 1st and last letter are same
// solved



function feast(beast, dish) {
    return ((beast.substr(0, 1) + beast.substr(-1, 1)) == (dish.substr(0, 1) + dish.substr(-1, 1)) ? true : false);
}
console.log(feast('moose man', 'mold bun'))