// Difference between var, let and const keywords in JS
// Declare variable with var
function e() {
    var n = "Mahfooz"; 
    console.log(n); 
}
e();

// 2. block scope with let
if (true) {
    let age = 30; 
    console.log(age); 
}
console.log(age)

// 3.immutability with const
const country = "INDIA";  
console.log(country); 

// hoisting behaviour let , var and const
// with var
console.log(x);
var x =5;

// with let
console.log(x)
let x=10

// with const
console.log(x)
const x=10

// Redeclare with var , let and const
var name1 = "Mahfooz";
var name1 = "Alam";
console.log(name1);  

// let
let name2='Mah'
name2='Al'
console.log(name2)

// const
const city = "New York";
city = "Los Angeles"; // give error
console.log(city)

// block scope in loop with let
for (let i = 0; i < 3; i++) {
    console.log(i); 
}

console.log(i);

// constant Arrays and Objects with const
const numbers1 = [1, 2, 3];
numbers1.push(4);  
console.log(a);  
numbers1 = [5, 6];

// object with constant
const person = { name: "Mahfooz", age: 22 };
person.age = 23;  
console.log(person); 
person = { name: "Alam" };





