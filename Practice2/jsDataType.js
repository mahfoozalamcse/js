// number
// let n = 2;
// console.log(n)

// let m = 1.3;
// console.log(m)

// let l = Infinity;
// console.log(l)

// let s = 'some value' / 2;
// console.log(s)

// string
// let s1 = "Hello Mahfooz";
// console.log(s1); 

// let s2 = 'You are fine';
// console.log(s2); 

// let s3 = `You add :  ${s1}`;
// console.log(s3);

// boolean
// let n1 = true;
// console.log(n1);  

// let n2 = false;
// console.log(n2);


// null
// let age = null;
// console.log(age)

// undefined
// let a;
// console.log(a);

// Syblol es6 unique to add
// let s1 = Symbol("Mah");
// let s2 = Symbol("Mah");
// console.log(s1 == s2);

// BigInt
// let b = BigInt("0b1010101010100111");
// console.log(b);

// Non primitive


// 1. object

// let details = {
//     name : "Mahfooz",
//     type : "Student",
//     age : 23,
//     adderess : "Noida(Delhi ncr)",
//     looking : "Software devlopement role (SDE)"
// }

// console.log(details);

// 2. Array

// let arr1 = [1, 3, 5, 8];
// let arr2 = [1, 3, {name : "Mahfooz"}, "Student"];

// console.log(arr1);
// console.log(arr2);

// 3. function

// function greet(name){
//     return "Hello "+ name + " your welcome ! ";
// }

// console.log(greet("Mahfooz"));

// 4. Date object

// let date = new Date();
// console.log("Current date "+date);
// console.log("Current year : "+date.getFullYear());

// 5. Regular expression

// Creating a regular expression to match the word "hello"

// let pattern = /hello/;
// let result = pattern.test("hello, world!"); // Returns true because "Hello" matches the pattern
// console.log(result);


// some intresting fact about data
// 1. Dynamic data

// let x = 22;   
// console.log(x)

// x = "Mahfooz";  
// console.log(x)

// x = [1, 2, 3, 7]
// console.log(x)



// 2.Everything is java script treat as an Object (Sort of):

// let s = "mahfooz";
// console.log(s.length);  

// // Example with a number
// let x = 12;
// console.log(x.toString()); 

// // Example with a boolean
// let x = true;
// console.log(x.toString());

/* Internal Working of primitives data type
   to be treeated as object in js
   
// Temporary wrapper object
let temp = new String("mahfooz"); 

console.log(temp.length); // 6

// The wrapper is discarded after use when
temp = null; 
*/

// 5. NaN

// console.log(typeof NaN); // number 
// console.log(NaN === NaN); // false

// let s1 = Symbol("mah");
// let s2 = Symbol("mah");
// console.log(s1 === s2); // false

//6.  here only number in js


let x = 42;     // Integer
let y = 42.5;   // Floating-point

console.log(typeof x); 
console.log(typeof y);

// 7. character is also string
let s1 = "mahfooz";   // String
let s2 = 'm';    // Character

console.log(typeof s1); 
console.log(typeof s2);











