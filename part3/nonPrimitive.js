let userName = {}; 

console.log(userName);

console.log(typeof userName);  

const obj = { // they take large memory reserve and use multiple  
    userName : "Mahfooz", // const here effect you change variable easily
    "last Name" : "Alam", 
    isLoggdin : true,
}

// console.log(obj.lastName); // not print
console.log(obj["last Name"]);




obj.lastName = "A"
console.log(obj);
console.log(obj.userName);

console.log(typeof obj);



// const name = "Mahfooz"; // you not reassigned again
// name = "M.A";
// console.log(name);

let day = new Date();
console.log(day.getDate());
console.log(day.getFullYear());


// Array
let hero = ["Mahfooz", "Raj", "A", 78, 90];
console.log(hero[0]);
console.log(hero.push("AM"));
console.log(hero);

console.log("1"+ 1);
console.log(1 + "1");
console.log(1 + true);


let value = "2abc";
console.log(Number(value));
console.log(typeof NaN);

console.log(Number(null));
console.log(Number(undefined));

console.log(typeof null);
console.log(typeof undefined);
console.log(null);
console.log(undefined);











