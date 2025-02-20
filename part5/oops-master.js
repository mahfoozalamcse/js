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
console.log(john);
console.log(john.age);

// prototype and prototypal  chain


