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

// Arrow funtion
const add = (a, b) => a + b;
console.log(add(5, 3));

// arrow with single parametre
const square = x => x*x;
console.log(square(4));

// multiple parametre
const add1 = ( x, y, z ) => {
    console.log( x + y + z )
}
add1( 10, 20, 30 );

// arrow with default parametre
const add2 =(x, y, z=50) =>{
    console.log(x + y + z);
    
}
add2(10, 30);

// return object litrals
const makePerson = (firstName, lastName) =>
({first: firstName, last: lastName});
console.log(makePerson("Mahfooz", "Alam"));

// fetch data
const fetchData = async () => {
    const data = await fetch('https://api.example.com/data');
    return data.json();
};
// fetchData()
// console.log(fetchData);




