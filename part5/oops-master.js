let car = {
    make : "Toyota",
    model : "Camery",
    year : 2020,
    start : function(){
       return `${this.make} car got started in ${this.year} `
    },
};
// console.log(car.start());

// constructor always Capital 
function Person(name, age){
    this.name = name;
    this.age = age;
}
let john = new Person("john", 22);
// console.log(john);
// console.log(john.age);

// prototype and prototypal  chain
function Animal(type){
    this.type = type;
}
Animal.prototype.speak = function(){
    return `${this.type} make a sound`
}
let dog = new Animal("Dog");
// console.log(dog);

// 
Array.prototype.mahfooz = function(){
    return `Custom method ${this}`
}
let myArr = [1, 2, 3, 4];
console.log(myArr.mahfooz());
let myNewArr = [1, 2, 3];
console.log(myNewArr.mahfooz());

// class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

// inheritance borrow property from vehicle class

class Car extends Vehicle {
    drive() {
        return `${this.make} this is inheritace example`
    }
}

// object
let myCar = new Car("Toyota" , "Carolla")
console.log(myCar.start());
console.log(myCar.drive());

 // let vehOne = Vehicle("Toyota", "Camary") //error  Class constructor Vehicle cannot be invoked without 'new'
// console.log(vehOne.make);
