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
let teacollection = [];
let tea;
do {
   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
   if (tea !== "stop") {
     teacollection.push(tea);
   } 
} while (tea !== "stop");

// here not run in node js use browswer and test

