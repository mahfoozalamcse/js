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
// console.log(myCar.start());
// console.log(myCar.drive());

 // let vehOne = Vehicle("Toyota", "Camary") //error  Class constructor Vehicle cannot be invoked without 'new'
// console.log(vehOne.make);

// Encapsulation

class Bankaccount{
    #balance = 0;
    deposite(amaount){
        this.#balance += amaount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}
let account = new Bankaccount();

// console.log(account.balance);

// console.log(account.#balance); // not excess outside
// console.log(account.getBalance()); // you can acces

// explore more 

// Abstraction hide complex detail
class coffieMachine{
    start(){
         // call DB
        // filter value
     return `Startig the machine .. `
    }
    berwCoffie(){
      // complex calculation
      return `Brewing....`
    }
    pressButtonStart(){
        let mass1 = this.start();
        let mass2 = this.berwCoffie();
        return `${mass1}  ${mass2}`
    }
}

let myMachine = new coffieMachine();
// console.log(myMachine.start());
// console.log(myMachine.berwCoffie());
// console.log(myMachine.pressButtonStart());

// polymorphism
class Bird{
    flying(){
        return `flying...`
    }
}
class Penguin extends Bird{
    flying(){
        return `Can't fly...`
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.flying());
// console.log(penguin.flying());

// static method
class Calculator{
    static add(a, b){
        return a+b;
    }
}
// let minCalc = new Calculator();
// console.log(minCalc.add(2,3)); // give error minCalc.add is not a function
// you call without creating object 

// console.log(Calculator.add(2, 7));

// getter and setter // all about more controll 
class Employee {
    #salary;
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary not be negative");
            
        }
       this.name = name;
       this.#salary = salary; 
    }
    get salary(){
        return `You are not allowed to see salary`;
    }
    set salary(value){
        if (value < 0) {
            console.error("Invalid Salary")
        }else{
            this._salary = value;
        }
    }
}
let employee = new Employee("Mahfooz", 50000);
console.log(employee._salary);
employee.salary = -60000;


