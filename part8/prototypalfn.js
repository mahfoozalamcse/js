// prototypal inheritance

function Person(name) {
    this.name = name;
}
// protype chain is inheritace
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
    
}
let mahfooz = new Person("Mahfooz");
mahfooz.greet();
