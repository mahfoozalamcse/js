// Argument Object
function calculateTotal(a,b){
 return a + b;
}

const total = calculateTotal(3,4,5,6,7,8,9);
console.log(total);

// 
function calculateTotal(a,b){
 console.log(arguments);
}

calculateTotal(3,4,5,6,7,8,9); // output  [Arguments] { '0': 3, '1': 4, '2': 5, '3': 6, '4': 7, '5': 8, '6': 9 }


// 
function calculateTotal(a,b){
 arguments[0]= 9;
 console.log(arguments);
}
​
calculateTotal(3,4,5,6,7,8,9);

// output : [Arguments] { '0': 9, '1': 4, '2': 5, '3': 6, '4': 7, '5': 8, '6': 9 }

// 
function calculateTotal(a,b){
 const arr1 = [...arguments];
 console.log(arr1);
 console.log(arguments);
}

calculateTotal(3,4,5,6,7,8,9);

// 
function hello(a = 10){
 console.log(a); // line2
 console.log(arguments); //line3
 arguments[0] = 9;   // line4
 console.log(arguments);   //line5
 console.log(a);  //line6
}

hello(4);

// Rest parametre
function calculateTotal(a,b,...rest){
console.log(a);
console.log(b);
console.log(rest);
}

calculateTotal(2,3,4,5,7,8,9,11.16);


// Variable Scope - Global, Local and Block Scope
var x = 6 ; //Global Scope 

function hello(){
 
 console.log(x);

}

hello();

// 
var x = 6 ; //Global Scope 

function hello(){
 var y = 17; // Local Scope
 console.log(x);
 console.log(y);
}

hello();

// 
{
 let a = 10 ;
 let b = 20 ;
}

console.log(a);
console.log(b);


// 
{
 var a = 10 ;
 var b = 20 ;
}

console.log(a);
console.log(b);

// 
function hello() {
 var a = 10 ;
 var b = 20 ;
}

console.log(a);
console.log(b);

// 
if (true) {
    var a = 10;
}
console.log(a); // Output: 10

// 
if (true) {
    let b = 20;
}
console.log(b); // Error: b is not defined

// Scope and Scope Chain

let a = 3;

function x() {
    let b = 5;

    function y() {
        let c = 7;
        
        function z() {
            console.log(a); // Logs 3
            console.log(b); // Logs 5
            console.log(c); // Logs 7
        }
        
        z();
    }
    
    y();
}

x();


// Recursion
// JavaScript program to find sum of array
// elements using recursion.
 
// Return sum of elements in A[0..N-1]
// using recursion.
function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
 
// Driver code
 
let A = [1, 2, 3, 4, 5];
let N = A.length;
const total1 = findSum(A,N);
console.log(total1);


// factorial
// Javascript to find factorial
// of given number  
// function to find factorial
// of given number
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
  
// Driver Code
let num = 5;
const fact = factorial(num);
console.log(fact);

// 

