// 1. for loop
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

// 2. for in loop
const person = { name: "Mahfooz", age: 22, city: "Noida(Delhi ncr)" };

for (let key in person) {
  console.log(key, ":", person[key]);
}

// 3. for each loop
const num = [10, 20, 30];

num.forEach(function(nums) {
  console.log(nums);
});

// 4. while loop
// let i = 0;
// while (i < 9) {
//     console.log("Number :", i);
//     i++;
// }


// 5. do while loop

let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 5);

