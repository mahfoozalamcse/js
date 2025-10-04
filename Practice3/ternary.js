// condition ? true : false
// 1. convert if else to ternary
let hour = 15;
let message;

if (hour < 12) {
  message = 'Good morning';
} else {
  message = 'Good afternoon';
}

console.log(message);

let message2 = (hour > 12) ? "Good morning" : "Good afternoon";
console.log(message2);

// 2. function call into ternary

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

let isLeaving = true;
let userName = 'Geeks';

isLeaving ? sayGoodbye(userName) : sayHello(userName);

// 3. ternery in function

function checkAge(age) {
  return (age >= 28) ? 'Adult' : 'Minor';
}

console.log(checkAge(30));  
console.log(checkAge(15));

// 4. nested ternary

let day = 1;
let greet = (day === 1) ? 'Starting day of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greet);

// 5. 
// simple practice
let PMarks = 60;
let res = (PMarks > 49) ? "Pass" : "Fail";

console.log(res);

