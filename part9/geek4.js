// readlinesync
// setup readlineSync

const readlineSync = require('readline-sync');

// asked userinput
const userName = readlineSync.question("May i know your name");
console.log(`Your name is : ${userName}`);


// Get user's age
const userAge = readlineSync.question('May I know your age? ');

// Convert the input to a number
const userAgeNumber = Number(userAge);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}