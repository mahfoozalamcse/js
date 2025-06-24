// Number 

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf()); 
  
console.log(typeof balance); // number 
console.log(typeof anotherBalance); // here convert by the help of new into object data type remember

// Boolean
let isActive = true;
let isMoreActive = new Boolean(true); // not recomended


// null and undefined // asked in interwieve
// let firstName;
// console.log(firstName); // output undefined

let firstName = null;
let lastName = undefined;

// console.log(firstName); // null output
// console.log(lastName); // undefined

console.log(typeof null);
console.log(typeof undefined);


// string
let oldString = "hello";
let newString = "hi.."
let newStr = oldString + newString;

console.log(newStr);


let strAdd = oldString + " " + newStr;
console.log(strAdd);

// best use backtics


let addStr = `Mahfooz ${oldString} and ${newString}`
console.log(addStr);












