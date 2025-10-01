// type conversion

let result = 10 + "10";  
console.log(result);

// Boolean
let result1 = true + 1;  
console.log(result1);

// equality comprision
let result3 = (5 == "5");  
console.log(result3);

// Autometic conversion
let res = Boolean("");  
let res2 = Boolean("Hello");  
console.log(res)
console.log(res2)

// explicit conversion
let n1 = 123;
let s1 = String(n1);  
let s2 = n1.toString();  
console.log(s1)
console.log(s2)

// convert to number
let s3 = "123";
let n3 = Number(s3);  
let s4 = "12.34";
let n4 = parseFloat(s4);  
console.log(s3)
console.log(n4)


// convert to boolean
let str = "Hello";
let b1 = Boolean(str);  
let emptyStr = "";
let b2 = Boolean(emptyStr);  
console.log(b1)
console.log(b2)
