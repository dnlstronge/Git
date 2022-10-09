var dog = {
    name: "Fido",
    weight: 48,
    breed: "mixed",
    loves: "walks"
}
var fido = dog
function bark(dog) {
    return dog
};
bark(fido);



function loseWeight(dog, amount) {
dog.weight = dog.weight - amount};



loseWeight(fido, 10);
console.log(fido.name + " now weighs " + fido.weight);
//console.log(fido);