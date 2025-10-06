// Pure Functions

// function doubleValue(number) {
//     return number * 2;
// }

// const result = doubleValue(5);
// console.log(result); // 10

// Impure function depend on outer variable

// const multiplier = 4;

// function doubleValue(number) {
//     return number * multiplier;
// }

// const result = doubleValue(5);
// console.log(result); // 20



// Avoiding Mutation

// function appendNumbers(arr) {
//     arr.push(5, 6);
//     return arr;
// }

// const numbers = [1, 2, 3, 4];
// const result = appendNumbers(numbers);
// console.log(result); // [1, 2, 3, 4, 5, 6]

// Making it pure

// function appendNumbers(arr) {
//     const newArr = [...arr, 5, 6];
//     return newArr;
// }

// const numbers = [1, 2, 3, 4];
// const result = appendNumbers(numbers);
// console.log(result); // [1, 2, 3, 4, 5, 6]
// console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)


// 