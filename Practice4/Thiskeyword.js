// JavaScript this Keyword
// const person = {
//     name: "Mahfooz",
//     greet() {
//         return `Welcome To, ${this.name}`;
//     }
// };
// console.log(person.greet());

// 
const person1 = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};
​
person1.greet();

// use this in function
function exampleFunction() {
  console.log(this); // Refers to the current execution context
}

// 
function greet() {
    console.log('Hello, my name is ' + this.name);
}

const person = {
    name: 'Amit',
    sayHello: greet
};
const anotherPerson = {
    name: 'Jatin'
};

greet(); 
person.sayHello(); 
greet.call(anotherPerson);

// use alone give global contex, console.log(this)

// Implicite binding
const person3 = {
    name: "Mahfooz",
    age: 22,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person.greet());

// Explicite binding
function ageVerify() {
    if (this.age > 18) {
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}

const per1 = { age: 21 };
const per2 = { age: 16 };
ageVerify.call(per1);
ageVerify.call(per2);

// Default binding
const age = 22;
function verifyAge (){
    return this.age;
}
console.log(verifyAge());


// Arrow function binding
const person2 = {
    name: "Mahfooz",
    age: 22,
    greet : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person2.greet());

// JavaScript Object Constructors
const mahfooz = {
    subject : "programming",
    language : "JavaScript",
}
console.log(mahfooz);

// object constructor 
// Constructor function
function Person4(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

//Creating Instances with a Constructor
const p1 = new Person4("Mahfooz", 23);
const p2 = new Person4("Alam", 22);

p1.sayHello();
p2.sayHello();

// Adding property to an object
const mah = {
    articles: 'computer science',
    quantity: 300,
};

// add
mah.city = "Noida"

// unique
mah['articles'] = 'Operating system';

// 
function mah2(a, b, c) {
    this.A = a;
    this.B = b;
    this.C = c;
    this.G = "Alam";
}

// add method to an object
mah.n = function () {
    return this.A + this.B;
};

// Adding method to an constructor
function mah3(a, b, c) {
    this.A = a;
    this.B = b;
    this.C = c;
    this.n = function () {
        return this.A + this.B;
    }
}

// instantiating an object constructor
// const object_name = new Object(); // or  
// const object_name = new Object("java", "JavaScript", "C#");

// const object_name = { };


// example 1
let mah5 = new Object();

mah5.a = "JavaScript";
mah5.b = "Mahfooz";

console.log("Subject: " + mah5.a);
console.log("Author: " + mah5.b );

// ex2.
let mah7 = { };

mah7['a'] = "DSA";
mah7['b']= "Alam";

console.log("Subject: " + mah7.a);
console.log("Author: " + mah7.b );

// example shows how to use function() with object constructor. 

let user = new Object();

user.a = "Java";
user.b = "MH.";
user.c = function () {
    return (gfg.a +" "+ user.b);
};

console.log("Subject: " + user.a);
console.log("Author: " + user.b);
console.log("Adding the strings: "+ user.c() );

// JavaScript Function Binding

