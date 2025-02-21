//syncronous
console.log("Hello js");

for (let index = 0; index < 9; index++) {
    console.log(index);
     
}

// asysncronous (also say like paus and execute) not follow sequence
console.log("Hello");
function sayHello(){

    console.log("I would like to say hello ");
}
setTimeout(() => {
    sayHello();
}, 4000);
console.log("mahfooz");

// that above asyn behaviour of js

