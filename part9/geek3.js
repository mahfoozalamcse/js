//type conversion
// const a = "3";
// const b = "10";
// console.log(typeof (a + b));

// console.log(typeof Number(a+b));

// const aNumber = Number(a);
// const bNumber = Number(b);
// console.log(aNumber + bNumber); // Outputs: 13

const a = "3";
const b = "10";
const c = Number(a);
const d = Number(b);

console.log(typeof a); // Outputs: string
console.log(typeof b); // Outputs: string
console.log(typeof c); // Outputs: number
console.log(typeof d); // Outputs: number

// convert num to string
let num = 78;
let str = String(num);
console.log(num);
console.log(typeof str);

// convert to boolean
const str1 = "Hello";
const str2 = "";

console.log(Boolean(str1)); // Outputs: true
console.log(Boolean(str2)); // Outputs: false



