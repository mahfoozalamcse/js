const readlineSync = require("readline-sync");
const totalMarksInPercentage = Number(readlineSync.question("Enter your marks in percentage? "));

const passingPercentage = 60;
const minAPlusPercentage = 85;
const minAPercentage = 75;
const minBPlusPercentage = 65;
const minBPercentage = 60;

if (totalMarksInPercentage >= passingPercentage) {

    if (totalMarksInPercentage > minAPlusPercentage){
        console.log("A+");
    }else if (totalMarksInPercentage > minAPercentage && totalMarksInPercentage < minAPlusPercentage){
        console.log("A");
    }else if (totalMarksInPercentage > minBPlusPercentage && totalMarksInPercentage < minAPercentage){
        console.log("B+");
    }else if (totalMarksInPercentage > minBPercentage && totalMarksInPercentage < minBPlusPercentage){
        console.log("B");
    }else {
        console.log("You barely made it through");
    }

}else {
    console.log("You should study hard")
}