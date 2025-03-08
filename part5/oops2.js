// constructor function js
function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

// create object
let myCar = new Car("toyota", "camary");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.discribe = function(){
        return `this is a cup of tea ${this.type}`
    }
}
let lamontea = new Tea("lamon tea");
console.log(lamontea.discribe());


// test again
function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} make a sound`
}
let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());

//  error handle
function Drink(name){
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
        
    }
    this.name = name;
}

let tea1 = new Drink("tea");
let coffiee = Drink("coffie");