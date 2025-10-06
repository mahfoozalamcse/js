// map(), reduce() and filter() functions
// 1.
arr = new Array(1, 2, 3, 6, 5, 4);
for(let i = 0; i < 6; i++) {
    arr[i] *= 3;
}
console.log(arr);

// map syntex : array.map(function_to_be_applied)
// array.map(function (args) {
//     code;
// })

function triple(n){
    return n*3;
}    
arr = new Array(1, 2, 3, 6, 5, 4);

var new_arr = arr.map(triple)
console.log(new_arr);

// Reduce() method
arr = new Array(1, 2, 3, 6, 5, 4);
result = 1
for(let i = 0; i < 6; i++) {
    result = result * arr[i];
}
console.log(result);

// syntex
// array.reduce(function_to_be_applied)
// array.reduce(function (args) {
//     // code;
// })

// reduce() ex...

function product(a, b){
    return a * b;
}
arr = new Array(1, 2, 3, 6, 5, 4);

var product_of_arr = arr.reduce(product)
console.log(product_of_arr)



// filter() method
arr = new Array(1, 2, 3, 6, 5, 4);
new_arr = []
for(let i = 0; i < 6; i++) {
    if(arr[i] % 2 == 0) {
         new_arr.push(arr[i]);           
    }
}
console.log(new_arr);

// syntex
// array.filter(function_to_be_applied)
// array.filter(function (args) {
//     // condition;
// })

// ex..
arr = new Array(1, 2, 3, 6, 5, 4);
var new_arr = arr.filter(function (x){
    return x % 2==0;
});

console.log(new_arr)