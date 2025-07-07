// for loop
// for(start; condition; increment/decrement){
//  // print ans
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element+" ");
    
// }
// console.log("Execution done..");

// const userName = "Mahfooz Alam";
// for (let index = 0; index < userName.length; index++) {
//    console.log(userName.charAt(index));
      
// }
// console.log("Execution done.. ");


// Nested for loop
// for (let i = 1; i <=5; i++) {
//     console.log("Start multiply "+ i);
    
//     for (let j = 1; j <=10; j++) {
//         console.log(i*j);
 
//     }  
// }

// start patern
/*
*
* *
* * *
* * * *
*/
// const symbol = "* "

// for(let i=1; i<=5; i++){
//    console.log(symbol.repeat(i));
// }


// for (let i =5; i >=1; i--) {
//     console.log(symbol.repeat(i));

// }

// Count number of character
// let userMassage = "User name is Mahfooz Alam"
// let count = 0;
// for (let i = 0; i < userMassage.length; i++) {
//     count++;
    
// }

// console.log(`Number of character user massage ${count}`);


// print even between 1 to 101

// let remainder;
// for (let i = 0; i < 101; i++) {
//     remainder = i % 2;
//     if (remainder == 0) {
//        console.log(`Remainder is even ${i}`);
        
//     }else{
//         console.log(`Remainder is odd ${i}`);
        
//     }
    
// }

// let inputString = "Hii how are you mahfooz";
// let vowels = "aeiou";
// for(let i=0; i<inputString.length; i++){
//     if (vowels.includes(inputString[i])) {
//         console.log(`vowels is ${inputString[i]} `);    
//     }else{
//         console.log(inputString[i]+" ");
        
//     }
// }

// while loop
// do while loop

// while
// let i=0;
// while (i < 10) {
//     console.log(i+" ");
//     i++; // not increament than go i infinite loop
// }
// console.log("Execution done.. ");

// do while loop

// let i=0;
// do {
//     console.log(i+" ");
//     i++;
    
// } while (i < 10);

// exercise while loop
// user enter a number if greater than 50 than enter again

// const readlineSync = require("readline-sync");
//  let number = Number(readlineSync.question("Enter number... "))

// while (number >= 50) {
//     number = readlineSync.question("Enter number less than 50.. ")
// }
// console.log("Congratulation..");
// console.log("Number is accepted.. ");


// try catch 
let user = "Mahfooz";
try {
    // somFun()
    console.log("Hello.. "+user);
    
} catch (error) {
    console.log("error occured");
    
    console.log(error);
    
}


// try {
//     // somFun()
//     console.log("Hello.. "+user);
    
// } catch (error) {
//     console.log("error occured");
    
//     console.log(error);
    
// } finally{ // mostaly not used finally 

//     console.log("Finally executed");
    
// }



