// Keys, Values & entries
const obj = {
    name: 'Prakash',
    age: 22,
    city: 'Noida'
};

console.log(obj);
const keys = Object.keys(obj);
console.log(keys);

// 
const obj2 = {
    x: 1,
    y: 2,
    z: 17
};

const values = Object.values(obj2);
const sum = values.reduce((acc, val) => acc + val, 0);

console.log(sum); // Output: 20

// 
const obj3 = {
    name: 'Mahfooz',
    age: 22,
    city: 'Noida'
};

const isPropertyFound = 'name' in obj3;
console.log(isPropertyFound); // Output: true

const isAgePropertyFound = 'age' in obj;
console.log(isAgePropertyFound); // Output: true

const isCountryPropertyFound = 'country' in obj;
console.log(isCountryPropertyFound); // Output: false

// iterate over object
const obj4 = {
    name: 'Mahfooz',
    age: 22,
    city: 'Noida'
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// creation using object litrals
let obj6= {
    name: "Raj",
    age: 23,
    job: "Developer"
};
console.log(obj);

// creating using new object 
let obj5 = new Object();
obj5.name= "Raj",
obj5.age= 23,
obj5.job= "Developer"

console.log(obj5); 

// Accesing object

let obj7 = { name: "Sai", age: 23 };

// Using Dot Notation
console.log(obj7.name);

// Using Bracket Notation
console.log(obj7["age"]);

// Modifying object
let obj9 = { name: "Sourav", age: 22 };
console.log(obj9);

obj.age = 23;
console.log(obj);

// adding in object
let obj10 = {name1 : "Mahfooz", age : 22};
console.log(obj10);
obj10.name1 = "Alam";
console.log(obj10);

// delete object
let obj11 = {name1 : "Mahfooz", age : 22};
delete obj11.name1;
console.log(obj11);

// check property exist
let obj12 = { model: "Tesla" };
console.log("color" in obj);
console.log(obj12.hasOwnProperty("model"));

// iterate through object property
let obj = { name: "Mahfooz", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

//  merge object
let obj13 = { name: "Mahfooz" };
let obj14 = { age: 23};

let obj15 = { ...obj13, ...obj14 };
console.log(obj15);

// object length
let obj16 = { name: "Sourav", age: 23 };
console.log(Object.keys(obj16).length);

// find type
let obj17 = { name: "mahfooz" };
console.log(typeof obj17 === "object" && obj17 !== null);

// exaple misli..
// Object literal
const obj1 = { key: "value" };

// Object constructor
const obj18 = new Object();
obj18.key = "value";

console.log(obj18);
console.log(obj18);

// JavaScript Object Properties
// 1. 
let obj19 = {
    name: 'Mahfooz',
    age: 23,
    isActive: true
};
console.log(obj19.name);

//2.
let obj20 = {
    name: 'Mahfooz',
    age: 23,
    isActive: true
};
console.log(obj20.age);  //dot notation
console.log(obj20['isActive']); //bracket notation

// 3. 
let obj21 = {
    name: 'Mahfooz',
    age: 18,
    isActive: true
};
obj.gender = 'male'; // Adding a new property
obj.age = 23;          // Modifying an existing property
console.log(obj21);

// 4. 
let obj22 = {
    name: 'Alam',
    age: 23,
    isActive: true
};
delete obj.isActive;
console.log(obj);

// 5. 
let obj23 = {
    name: 'Alam',
    age: 23,
    gender: 'female'
};
console.log('age' in obj23);
console.log(obj23.hasOwnProperty('gender'));

// 6. 
let obj24 = {
    name: 'Mahfooz',
    age: 23,
    gender: 'male'
};

Object.defineProperty(obj, 'country', {
    value: 'India',
    enumerable: false
});

console.log(obj24.country); 
console.log(Object.keys(obj24));

// 7. Property attributes
let obj25 = {
    name: 'Mahfooz',
    age: 23
};

Object.defineProperty(obj25, 'status', {
    value: 'active',
    writable: false,
    configurable: false,
    enumerable: true
});

obj25.status = 'inactive'; // Does not change due to `writable: false`
console.log(obj25.status);

// Accessors (Getters and Setters)

let obj26 = {
    fName: 'Mahfooz',
    lName: 'Alam',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
};

console.log(obj26.fullName);
obj26.fullName = 'Alam';
console.log(obj26.fName);
console.log(obj26.lName);

// JavaScript Function name Property

// Creating function name func1
function func1() {
}
console.log(func1.name)

// 
// Creating function name func1
function func2() {
}
// Creating function name func2
function func3(a, b) {
}
console.log("Name of the function func2 is: "
    , func2.name)
console.log("Name of the function func2 is: "
    , func3.name)

// Logging return type to console
console.log("Type of func.name is: "
    , typeof (func3.name))

// 

// Creating object of functions
let obj27 = {
    function1: function functionName1() { },

    function2: () => {
        console.log("function2 is running")
    },
    function3: () => {
        obj27.function2();
    },
}
obj27.function3()
// Calling object function1 but function 
// name is functionName1
console.log("Name of the function function1 is: "
    , obj27.function1.name)
console.log("Name of the function function3 is: "
    , obj27.function3.name)

// 
// Function func
function func() { };
// Obj is the instance of the 
// function object func
let obj = new func();
if (obj.constructor.name === "func")
    console.log("obj", obj,
        "is an instance of function func")
else
    console.log('Oops!')

// 

// Function func
function func() { };
// Logging bounded function to console.
console.log("Name of the bounded func is: "
    , func.bind({}).name)







