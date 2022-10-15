// using instance of?

function duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    }
}
let toy = new duck ("quack quack")
toy.quack();

//test
console.log(typeof toy); // Output: object
console.log(toy instanceof duck); //Output: true