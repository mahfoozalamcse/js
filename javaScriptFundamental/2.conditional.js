// Conditional Statements 
 

const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Enter a number? "));

const remainderAfterDivisionByThree = number % 3;
const remainderAfterDivisionByFive = number % 5;
const remainderAfterDivisionBySeven = number % 7;

if (remainderAfterDivisionByThree === 0 && remainderAfterDivisionByFive === 0){
    console.log("Mahfooz");
}else{
    
}
if (remainderAfterDivisionByThree === 0 || remainderAfterDivisionByFive === 0){
    console.log("Alam");
}else{

}

if (remainderAfterDivisionBySeven === 0){
    console.log("MahfoozAlam");
}
else {
    console.log("Not divisible by 3, 5 and 7");
}

