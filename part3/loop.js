// loop 
// print sum 1 to 5
let sum = 0;
let i = 1;
while (i <= 5) { 
    
    sum = sum + i;
    i++;
}
console.log(sum);

// write array countDown and push element in array 
let countDown = [];

let j = 5;
while (j>0) {
    countDown.push(j);
    j--;
}
console.log(countDown);

// let teacollection and use promt to add
// let teacollection = [];
// let tea;
// do {
//    tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//    if (tea !== "stop") {
//      teacollection.push(tea);
//    } 
// } while (tea !== "stop");

// here not run in node js use browswer and test


// sum 1 to 3 use while loop
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);

// multiply each element in array and store in another number
let multiplyarr = [];
let number = [2, 4, 6];
for (let index = 0; index < number.length; index++) {
  //  element = number[index]*2;
  //  multiplyarr.push(element);
 
  multiplyarr.push(number[index]*2);
}
console.log(multiplyarr);

// take city and push in cityList
let citeis = ["Paris", "London", "New-York", "Tokyo"];
let cityList = [];
for (let c = 0; c < citeis.length; c++) {
  const element = citeis[c];
  cityList.push(element);
}
console.log(cityList);
