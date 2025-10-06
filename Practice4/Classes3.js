// Classes Inheritance
class Laptop {
    constructor(ram, processor, generation) {
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

    displaySpecs() {
        console.log(`Laptop Specs: RAM = ${this.ram}, Processor = ${this.processor}, Generation = ${this.generation}`);
    }
}

// 
class Dell extends Laptop {
    constructor(ram, processor, generation, modelName, price) {
        super(ram, processor, generation); // Call the parent class's constructor
        this.modelName = modelName;
        this.price = price;
    }

    displaySpecs() {
        super.displaySpecs(); // Call the parent class's displaySpecs method
        console.log(`Model Name = ${this.modelName}, Price = ${this.price}`);
    }
}

// 
class Lenovo extends Laptop {
    constructor(ram, processor, generation, modelName, price) {
        super(ram, processor, generation);
        this.modelName = modelName;
        this.price = price;
    }

    displaySpecs() {
        super.displaySpecs();
        console.log(`Model Name = ${this.modelName}, Price = ${this.price}`);
    }
}

const lenovoLaptop = new Lenovo('4GB', 'AMD Ryzen 8', '7th Gen', 'Lenovo IdeaPad', 60000);
lenovoLaptop.displaySpecs();

// Static properties
class Children {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static sortByAge(child1, child2) {
        return child1.age - child2.age;
    }
}

let child1 = new Children("Mahfooz", 11);
let child2 = new Children("Alam", 19);
let child3 = new Children("Raj", 9);

let childrenArray = [child1, child2, child3];
childrenArray.sort(Children.sortByAge);

console.log(childrenArray);

// 
class Children {
    static ID = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Children.ID++;
    }
}

let child4 = new Children("Mahfooz", 11);
let child5 = new Children("Alam", 19);
let child6 = new Children("Raj", 9);

console.log(child4.id); // Outputs: 1
console.log(child5.id); // Outputs: 2
console.log(child6.id); // Outputs: 3



// Private properties
class User {
    constructor(id) {
        this.id = id; // Public property
    }
}

const user = new User('123');
console.log(user.id); // Output: 123

user.id = '321';
console.log(user.id); // Output: 321 (ID has been changed externally)



// 
class User {
    #id; // Private property
    
    constructor(id) {
        this.#id = id;
    }

    // Method to access the private ID
    getId() {
        return this.#id;
    }

    // Method to change the private ID
    changeId(newId) {
        this.#id = newId;
    }
}

const user = new User('321');
console.log(user.getId()); // Output: 321

// Attempting to access or modify the private property directly will result in an error
user.#id = '123'; // SyntaxError: Private field '#id' must be declared in an enclosing class

// Changing the ID through the class method
user.changeId('123');
console.log(user.getId()); // Output: 321