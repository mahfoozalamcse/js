// Anonymous function
// 1. normal

// function() {
//     // Function Body
//  }

// 2. immidiate execute.. 

( () => {
    // Function Body...
} )();

const greet = function () {
	console.log("Welcome mahfooz ");
};
    
greet();

// pass parametre
const greet1 = function( str ) {
	console.log("Welcome to ", str);
};
    
greet1("Google");

setTimeout(function () {
	console.log("Welcome to Meta... ");
}, 2000);

// self execute.. 
(function () {
	console.log("Welcome to Microsoft");
})();


// anonymous with arrow function
const greet2 = () => {
	console.log("Welcome to Amazon..");
}
    
greet2();


// single line arrow anonymous function
const greet3 = () => console.log("Welcome to Apple");

greet3();

// IIFE self execute
(() => {
	console.log("Mahfooz");
})();