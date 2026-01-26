// comprision operator
// console.log(50 < 30);
// console.log(50 >= 30);

// // string
//  console.log("Apple" > "Banana");
//  console.log("Glow" < "Lowy");

//  console.log("2" > 3);

 
//  console.log("01" == 1);
//  // strict equals
//  console.log("01" === 1);

//  // null undefined
//  console.log(null == undefined);
//  console.log(null === undefined);


//  console.log(null > 1);
//  console.log(null < 1);
//  console.log(null == 0); // here null is null

// conditional statement
//  let userAge = 23;
//  if (userAge >= 23) {
//     console.log("Mahfooz");

    
//  }else{
//     console.log("User not enter..");
    
//  }

// take input from user
// const readlineSync = require("readline-sync");
// const userName = readlineSync.question("May i know your name..");
// const userAge = readlineSync.question("May i know your age...");


// if (userAge >= 18) {
//     console.log(`Welcome ${userName} you are eligible to give this exam in age ${userAge} `);
    
// }else{
//     console.log(`Welcome ${userName} you are not eligible to give this exam in age ${userAge} `);
    
// }

// question 1 check by division
// const num1 = readlineSync.question("May i know number..")
// const reminder1 = num1 % 3;
// const reminder2 = num1 % 5;

// if(reminder1 == 0){
//     console.log("Reminder is divisible by 3 .. ");
//     console.log("Fixx..");
    
// }else if(reminder2 == 0){
//    console.log("Buzz");
//    console.log("Divisible by 5.. ");
   
// }else{
//     console.log("Not divisible by 3 and 5 both.. ");
    
// }



// Nested conditional statment
// check number even or not
// than chec
// const readlineSync = require("readline-sync");
// const number = Number(readlineSync.question("Enter number .."))
// const remainder = number % 2;
// if (remainder === 0) {
//     console.log("Number is Even..");
//     if (remainder % 4 === 0) {
//         console.log("Number is divided by 4.. ");
        
//     }else{
//         console.log("Number is divided other even number.. ");
        
//     }
// }else{
//     console.log("Number is odd.. ");
//     if (remainder % 5 == 0) {
//         console.log("Number divide by 5.. ");
        
//     }else{
//         console.log("Number is divide by other odd number");
        
//     }
// }


// practice take 3 user input string and print smallest string
const readlineSync = require("readline-sync");
const input1 = String(readlineSync.question("Enter string 1.."));
const input2 = String(readlineSync.question("Enter string 2.."));
const input3 = String(readlineSync.question("Enter string 3.."));

const input1length = input1.length;
const input2Lenth = input2.length;
const input3Length = input3.length;
 
// compare
if (input1 < input2  && input1 < input3) {
    console.log(`Smallest string is ${input1} and Length ${input1length}`);
    
}else if (input2 < input1 && input2 < input3) {
    console.log(`Smallest string is ${input2} and Length ${input2Lenth}`);
    
}else if(input3 < input1 && input3 < input2){
    console.log(`Smallest string is ${input3} and Lenghth ${input3Length}`);
    
}else{
    console.log(`Two string have smallest and same length .. `);
    
}
 
