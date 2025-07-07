// Function

// function declaration
function greetMassage() {
    console.log("Hello mahfooz");
    
}
// calling function
// greetMassage()
// greetMassage()

// function pass as parameter
// let user = "Mahfooz";
greetings("Raj", "noida");
function greetings(user, city) { // user as parameter
      console.log(`Welcome ${user} from ${city}`);
      
}
// greetings("Mahfooz", "Noida"); // pass as argument
// greetings("Prakashh", "Varansi");
// greetings("Raj");
// greetings();

// sum of all 1 to 10
function sum(min, max) {
    let sum = 0;
    for(let i = min; i<=max; i++){
       sum += i;
    }
    return sum;
}
const output = sum(20, 100);
console.log(output);

// console.log(sum(1, 10));

// Ananimous function
// ananymousFunction("Mahfooz"); // anonymous not acces before
// let ananymousFunction = function greet(user) {
//     console.log(`Welcome ${user}`);
//     console.log(typeof greet); // local function
    
    
// }
// ananymousFunction("Mahfooz");
// console.log(typeof ananymousFunction);

// function return and undefind
function sum2(x, y) { // pure function fun parameter not depend or control by outer side
    return x+y;
}
//console.log(sum2(12, 23));

const result = sum2(12, 56); 
// console.log(result);


// Arrow function
const calculateSum = function sum3(x, y) {
    return x+y;
}
console.log(calculateSum(12, 78));

// Arrow function
const calculate = (x, y)=>{
    return x+y;
}
console.log(calculate(12, 79));

// one line arrow function which called flate arrow function
const calculate1 = (x, y)=> x+y;
console.log(calculate1(12,87));

const sumGreaterX = (x, y) => x > y ?  x+y :  x-y;
const value = sumGreaterX(12, 80);
console.log(value);






