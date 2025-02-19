// java script is prototype based means extra things about 
let computer = {cpu : 12};
let lenovo = {screen : "HD",
              __proto__: computer,


};
let apple = {quality : "Good"};

// console.log(`computer `, computer.__proto__);
// console.log(`lanovo `, lenovo.__proto__);

// lets understand with real example
let genricCar = {tyres : 4};
let tesla = {
    Driver : "AI",
}
Object.setPrototypeOf(tesla, genricCar);
console.log(tesla);
console.log(tesla.tyres);
console.log(`tesla `, Object.getPrototypeOf(tesla));


