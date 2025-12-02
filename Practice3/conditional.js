// if statement
// if else statement
// if..else if..else statement
// switch statement
// ternary (conditional) operator

/*
let x = 20;

if (x % 2 === 0) {
    console.log("Even");
}


if (x % 2 !== 0) {
    console.log("Odd");
};

*/

// 2.

/*
let age = 25;

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Not an Adult")
};
*/

// 3. 
/*

const x = 0;

if (x > 0) {
    console.log("Positive.");
} else if (x < 0) {
    console.log("Negative.");
} else {
    console.log("Zero.");
};
*/

// 4. 

/*
const marks = 85;

let Branch;

switch (true) {
    case marks >= 95:
        Branch = "Computer science eng..";
        break;
    case marks >= 85:
        Branch = "Mechanical eng..";
        break;
    case marks >= 75:
        Branch = "Chemical eng..";
        break;
    case marks >= 65:
        Branch = "Electronics and communication eng..";
        break;
    case marks >= 55:
        Branch = "Civil eng..";
        break;
    default:
        Branch = "Bio tech";
        break;
}

console.log(`Student Branch name is : ${Branch}`);

*/

/*

// 5.  condition ? true : false 
let age = 21;

const result =
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);

*/

// 6. 


let weather = "sunny";
let temp = 35;

if (weather === "sunny") {
    if (temp > 30) {
        console.log("It a hot days");
    } else if (temp > 20) {
        console.log("It a warm days");
    } else {
        console.log("It a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella ");
} else {
    console.log("Check the weather forecast");
};
