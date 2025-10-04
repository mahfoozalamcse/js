// Nullish Coalescing(??) Operator
// syntex =>  variable ?? defaultValue
function hooka(bar) { 
    bar = bar ?? 45; 
    console.log(bar); 
} 
hooka(); // 45 
hooka(21); // 21

// 2. 
const hooka1 = { 
    bar: 0 
} 

const valueBar = hooka1.bar ?? 52; 
const valueBaz = foo.baz ?? 32; 

// Value of bar: 0 
console.log("Value of bar: ", valueBar); 

// Value of bar: 32
console.log("Value of baz: ", valueBaz);


