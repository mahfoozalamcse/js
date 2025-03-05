function greet(name){
    console.log(`hello ${name}`);
    
}
// greet("mahfooz");


// create a function makeTea and use type of tea parametre to prin making tea type and 
// store another variable store and print tea

function makeTea(typeOfTea){
   return `Making ${typeOfTea}`
}


let tea = makeTea("Lamon Tea");
// console.log(tea);

// take a function inside fun order confirm chai and insde call confirm order and return result
function orderTea(typeOfTea){
    function confirmOrder(chai){
        return `order confirm for ${chai}`
    }
    return confirmOrder(typeOfTea);
}


let result = orderTea("Black tea");
console.log(result);

// regular function
 function greet1(){};
// arraow function 
const greet2 = () =>{};

const calculatePrice = (price, quantity) => price*quantity;
console.log(calculatePrice(250, 29830));

// when use DOM than not use arrow
// due they pass window but they have
// use normal funtion wich pass using this key in window 
// test in console this keyword using normal and arraow fubtion understand




