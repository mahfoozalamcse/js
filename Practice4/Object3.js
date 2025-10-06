// Shorthand Syntax for Object Property Value in ES6

// Object property shorthand
/*
const name1 = 'Mahfooz'
const age = 22
const location = 'India'

// User with ES6 shorthand
// property 
const user = {
    name1,      
    age,
    location
}

console.log(user) 

*/

// 
const name2 = 'Raj'
const age = 39
const location = 'India'

// User without ES6 
// shorthand property 
const user = {
    name: name2,      
    age: age,
    location: location
}

console.log(user) 

// JavaScript For In Loop
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2025
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// 
// Example of for in for arrays
// Not a recommended way to traverse
// an array
const a = [1, 2, 3, 4, 5];

for (const i in a) {
  	console.log(a[i]);
}

// JavaScript Optional Chaining
// obj?.prop
// obj?.[expr]
// arr?.[index]
// func?.(args)

// const user1 = {
//     dog: {
//         name: "Alax"
//     }
// };

// console.log(user.cat?.name); //undefined
// console.log(user.dog?.name); //Alax
// console.log(user.cat.name); 


// 
let user1 = () => console.log("Alex");
let user2 = {
    dog() {
        console.log("I am Alex");
    }
}
let user3 = {};

user1?.();       // Alex
user2.dog?.();   // I am Alex
user3.dog();     // ERROR - Uncaught TypeError: 
// user3.dog is not a function. 
user3.dog?.();   // Will not generate any error

// Destructuring in JavaScript

const arr = [10, 20, 30, 40]

console.log("Example 1");
const [x, y, z, w] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

const [p, q, , r] = arr;
console.log("Example 2");
console.log(p);
console.log(q);
console.log(r);

const [s, t] = arr;
console.log("Example 3");
console.log(s);
console.log(t);

// example rest operator
let [fst, , ...last] = ["a", "b", "c", "d"];

console.log(fst);
console.log(last);

// example of swaping
let c = 10, d = 20;

// Swapping 
[c, d] = [d, c];

console.log(c);
console.log(d);

//
function NamesList() {
    return ["a", "b", "c", "d"]
}

let [first, second] = NamesList();

console.log(first);
console.log(second);

// in ES5 to assign variables from objects its implementation is
let marks = { x: 21, y: -34, z: 47 };

const { e, f, g } = marks;

console.log(e);
console.log(f);
console.log(g); 

// Object destructuring
// 1.
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

// 2.
({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}

// 3.
const marks1 = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = marks1;
console.log(alpha1, beta1);

// 
let object1 = {
    name: "Mahfooz",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "201009",
            article: {
                topic: "destructuring"
            }
        }
    }
}

let { name1 } = obj;
console.log(name1)

let { add: { country: abcd } } = obj
console.log(abcd)

let { add: { state: { code: cd } } } = obj
console.log(cd)

let { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);
