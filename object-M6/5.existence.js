/**
 * Property Existence 
 * & for loop
 */

const obj = {
    name: "Mahfooz",
    city: "Delhi"
}

// const key = "age";

// const isPropertyFound = key in obj;
// console.log(isPropertyFound);

// for (let key in obj){
//     console.log(key, obj[key]);
// }

const Obj = {
    ashish: "700",
    mahfooz: "750",
    riya: "1000",
    prakash: "500"
}

let totalAmount = 0;
for (let key in Obj){
    totalAmount = totalAmount + Number(Obj[key])
}

console.log(totalAmount);