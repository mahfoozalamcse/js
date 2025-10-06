// Execution Context in Javascript
console.log("Global Context Start");

function foo() {
    console.log("Inside foo");
}

function bar() {
    console.log("Inside bar");
    foo();
}

bar();
console.log("Global Context End");


// 2. How to Execute JavaScript Code ?

// 3. What is the Call Stack in JavaScript
function f1() {
    console.log('Hi by f1!');
}

function f2() {
    f1();
    console.log('Hi by f2!');
}

f2();

// 3.1 What is Stack Overflow ?
function funcA() {
  funcB();
}

function funcB() {
  funcA();
}

//4.  JavaScript Hoisting

// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };

// 4.1
// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// function declaration hoisting
greet(); // "Hello, Mahfooz"
function greet() {
    console.log("Hello, mahfooz");
}

// 5. function expression hoisting
hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};

// hoisting let and const in function
function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 50;
}
test();

// hoisting with class
const obj = new MyClass(); // ReferenceError
class MyClass {
    constructor() {
        this.name = "Mahfooz Alam.. ";
    }
}

// 
var a = 10;
var a = 20; // No error
console.log(a); // 20

// Accessing Variables Declared Later in Loops
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}

// hoist funtion with parametre
test(10); // 10
function test(num) {
    console.log(num);
}


// hoisting whith nested parametre
function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();


