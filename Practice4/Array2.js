// push()
let arr = [1, 2];
arr.push("3");

console.log(arr);

// pop()
let arr2 = [1, 2, 3];
let lastNum = arr2.pop();

console.log(arr);
console.log(lastNum);

// sort()
// Original array
let ar = ["JS", "HTML", "CSS"];

console.log(ar);

// Sorting the array
ar.sort()

console.log(ar);

// sort in ascending order
const ar1 = [ 10, 20, 25, 100 , 40]
console.log(ar1.sort()) // output arr [10, 100, 20 , 25, 40]

console.log(ar1.sort((a, b) => a - b));

// decending order
const ar2 = [ 10, 20, 25, 100 , 40]
console.log(ar2.sort((a,b) => b - a))

// sort using reverse order
let a = ["JS", "HTML", "CSS"];
console.log(a);
a.sort((x, y) => x.localeCompare(y))
console.log(a);

// also have reverse
let b = ["JS", "CSS", "HTML"];
b.sort();
b.reverse();
console.log(b);


// sort array of object 
let objArray = [
    { name: 'Rahul', age: 28 },
    { name: 'Jatin', age: 25 },
    { name: 'Vikas', age: 32 },
    { name: 'Rohit', age: 35 }
];

// Sort the objects for age
objArray.sort((x, y) => x.age - y.age);

console.log(objArray);

// Sort object for names 
objArray.sort((x, y) => x.name.localeCompare(y.name));

console.log(objArray);

// sort stability means same value order not change

let objArray2 = [
    { name: 'Rahul', age: 30 },
    { name: 'Jatin', age: 25 },
    { name: 'Vikas', age: 30 },
    { name: 'Rohit', age: 25 }
];

objArray2.sort((x, y) => x.age - y.age);

console.log(objArray2);

// JavaScript String split() Method
let str = "Hello and Welcome mahfooz with bottom my hearts .. ";
let words = str.split(" ");
console.log(words);

// 2. 
// JavaScript Program to illustrate split() method 
let str2 = 'Geeks for mahfooz'
let array = str2.split("for");
console.log(array);

// Array join() method in js
function func() {
    let a = [1, 2, 3, 4, 5, 6];
    console.log(a.join('|'));
}
func();

// normal 
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.join());

// 
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3.join(''));

// JavaScript Spread Operator
let c = [10, 20];
let d = [...c, 30, 40];

console.log(c);
console.log(d);

// 
let e = [10, 20];
let f = [30, 40, ...e, 50, 60];

console.log(e);

// 
// Min in an array using Math.min()
let arr4 = [1,2,3,-1];
console.log(Math.min(arr4)); //NaN

// Now using spread 
console.log(Math.min(...arr4));

// paas in function

function add(x, y, z) {
  return x + y + z;
}

let arr5 = [10, 20, 30];
console.log(add(...arr5));

// Passing Array Elements as Function Parameters
function add(x, y, z) {
  return x + y + z;
}

let arr6 = [10, 20, 30];
console.log(add(...arr6));

// Copying Array using Spread
const arr7 = [1, 2, 3];
const arr8 = [...arr7]; 
console.log(arr8); 


// Spread operator for array concatenation
let arr9 = [1, 2, 3];
let arr10 = [4, 5];

arr9 = [...arr9, ...arr10];
console.log(arr9);

// working of array with spread

const usr = {
    name: 'Mahfooz',
    age: 22
};

const cloneUsr = { ...usr };
console.log(cloneUsr);

// another example
const usr1 = {
    name: 'Alam',
    age: 22,
};

const usr2 = {
    name: "mahfooz",
    location: "UAE"
};

const mergedUsers = { ...usr1, ...usr2 };
console.log(mergedUsers);

// 
const object1 = { a: 1, b: 2 };
const object2 = { ...object1, b: 3, c: 4 };
console.log(object2);





