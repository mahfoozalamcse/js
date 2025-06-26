// string concatenation 
let user = "Mahfooz";
let age = 23;
console.log("Student name is : " + user + " age is : " + age);

// tempalte litrals
console.log(`Student is ${user} and age ${age}`);

// benfits
let username = "Mahfooz";
let age1 = 99;
let multilineMessage = `My name is ${username}.
I am ${age} years old.
I love to code, eat, and sing.`;
console.log(multilineMessage);

// Arithmetic operation 
const x = 11;
const y = 9;

 //Addition:
console.log(x + y); // Outputs: 15

//Subtraction:
console.log(x - y); // Outputs: 9

//Multiplication:
console.log(x * y); // Outputs: 36

//Division:
console.log(x / y); // Outputs: 4

Remainder:
console.log(x % y); // Outputs: 0

//Exponentiation:
console.log(x ** 2); // Outputs: 144
console.log(y ** 3); // Outputs: 27

// type conversion
const l = "12";
const m = "3";
console.log(l + m); // Outputs: "123"

// for arithmetic operation
console.log(l - m); // Outputs: 9
console.log(l * m); // Outputs: 36
console.log(l / m); // Outputs: 4

// Handle non numeric string
const h = "apple";
const n = "mango";
console.log(h + n); // Outputs: "applemango"
console.log(h - n); // Outputs: NaN
console.log(h * n); // Outputs: NaN
console.log(h / n); // Outputs: NaN


// practice
const input = "21"; // Simulating user input
const numberInput = Number(input);

if (!isNaN(numberInput)) {
    console.log(numberInput + 8); // Outputs: 50
} else {
    console.log('Invalid input');
}