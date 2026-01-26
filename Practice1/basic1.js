// variable
var massage = "Hello mahfooz";
// console.log(massage);

massage = "Prakash"
// console.log(massage);

let mas1 = "hiiii..";
// console.log(mas1);

const cart = "Apple";
// console.log(cart);

// difference var let const
var mas2 = "hello";
var mas2 = "Yes";
var mas2 = "bye";
// console.log(mas2); // bye

let mas3 = "hello"
//let mas3 = "yes" give error
mas3 = "yes";
// console.log(mas3);

const mas4 = "Hey";

// const mas5; const need define and intialize both
// console.log(mas4);
// variable naming convensions

let userName;  // camel case 
let age;
let Age; // variable case sensitive
let _;
let $;
let number1;
let number_1;
let $price;


// Data types
// string
let userName1 = "Mahfoz";
// console.log(userName1);
// console.log(typeof userName1);


// Number

let num = 12;
// console.log(num);
// console.log(typeof num);
// let num2 = 12.99;
// console.log(typeof num2);

// boolean
let isproduct = true;
// console.log(isproduct);
// console.log(typeof isproduct);

// undefined
let productName;
// console.log(productName);

// null
let noValue = null;
// console.log(noValue);
// console.log(typeof noValue);



// object 
let userDetails = {
   userName : "Mahfooz",
   userAge : 23,
   userAddress : "Noida",
   userPinCode : 123456
}

// console.log(userDetails);
// console.log(typeof userDetails);

// cancatenation and template litrals
 let userName4 = "Mahfooz";
 let age4 = 23;

 let massage3 = "hello "+ userName4 + " age : "+ age4;
 // console.log(massage3);

 // tempalate litral
 // you write multi line\
 let massage1 = `Hello dear ${userName4} welcome at age : ${age4}
 love to be a part of this world`
 // console.log(massage1);

 // Arithmetic operators
// let a = 10;
// let b = 34;
// console.log(a + b);
// console.log(a % b);
// console.log(a-b);
// console.log(a * b);
// console.log(a**2);

// let a = "12";
// let b = "3";

// console.log(a + b);
// console.log(a % b);
// console.log(a-b);
// console.log(a * b);
// console.log(a**2);


// let a = "12"; // string
// let b = 3; // number 

// console.log(a + b);
// console.log(a % b);
// console.log(a-b);
// console.log(a * b);
// console.log(a**2);


const x = "Apple";
const y = "Mango";

// console.log(x+y); // AppleMango
// console.log(x-y); // NAN
// console.log(x*y); // NAN
// console.log(x/y); // NAN


// type conversion
// let a = "12";
// let b = "3";
// let c  = Number(a);
// let d = Number(b);
// console.log(c+d);

let m = "Mahfooz";
let convertMassage = Number(m);
console.log(convertMassage);

let tex = 23;
let res = Boolean(tex);
console.log(res);

let tex1 = 0;
console.log(Boolean(tex1));

// read data from user
// ReadlineSync
const readlineSync = require("readline-sync");
const userMassage = readlineSync.question("May i know your name : ");
const userAge = readlineSync.question("May i know your Age : ");
let today = new Date();

const yearBirth = Number(today.getFullYear()) - Number(userAge);

console.log(`Welcome : ${userMassage} and age is : ${userAge} and date of birth : ${yearBirth}`);





