// ReadlineSync
// setup readline sync
const readlineSync = require('readline-sync');

// ask user input
const userName = readlineSync.question("May i know your name : ");
console.log("Welcome : "+ userName);
console.log(`Welcome : ${userName}`);


// Convert and Use Numeric Input:

const userAge = readlineSync.question("Enter your age : ");
const userAgeNumber = Number(userAge);

if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;

    console.log(`You born in year : ${birthYear}`);
    
}else{
    console.log(`Please enter a valid age `);
    
}



