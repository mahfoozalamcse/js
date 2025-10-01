/*
var a = 10;
 a = 20;
 var a = 40; 
console.log(a);

let b = 20;
 b = 30;
 // let b = 30; not reassighn
console.log(b);

const c = 30;
// c = 40; // give error assighn const variable

console.log(c);

*/

// var a = "Hello Mahfooz";
// var b = 10;
// console.log(a);
// console.log(b);

// let a = 12
// let b = "Mahfooz";
// console.log(a);
// console.log(b);

// const a = 5
// let b = "Mahfooz";
// console.log(a);
// console.log(b);

// let userName = "Alam";  // Valid
// let $price = 100;         // Valid
// let _temp = 0;            // Valid
// let 123name = "Raj";    // Invalid
// let function = "Mahfooz"; // Invalid

// if (true) {
//   var x = 30; 
// }

// // Accessible outside the block
// // because we are in same function
// console.log(x);

// let and const are block scoped : Cannot be accessed outside block even if inside the same function

// if (true) {
//   let y = 40;
//   const z = 60;
// }
// console.log(y, z); // give ReferenceError


// var can be redeclared in the same scope, but let and const cannot be

// var x = 10;
// var x = 20; // Allowed

// // let and const give error
// let y = 30;
// let y = 40; // SyntaxError

// const z = 50;
// const z = 60; // SyntaxError

// We can change elements of array or objects even if declared as const.

const object = {
     name : "Mahfooz",
     age : 20
};

object.age = 30;

console.log(object);


const arr = [1, 2, 3, 4];
arr[2] = 5;

console.log(arr);



// TypeError in the below lines
// obj = { b: 30 }; 
// arr = [50, 100] 

// What are the variable naming conventions in JS

<script>
  var #abc = "abc";
  console.log(#abc);
</script>









