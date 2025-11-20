// JavaScript - Iterate Over an Array
// 1. for of loop
let a = [10, 20, 30, 40, 50];
for (let item of a) {
    console.log(item);
}

// 2. for each loop
let b = [10, 20, 30, 40, 50];
b.forEach((item) => {
    
    console.log(item);
});


// 3. use for in loop
let c = [10, 20, 30, 40, 50];
for (let i in c) {
    console.log(c[i]);
}

// 4. use for loop
let d = [10, 20, 30, 40, 50];
for (let i = 0; i < d.length; i++) {
    console.log(d[i]);
}

// while loop
let e = [10, 20, 30, 40, 50];
let i = 0;
while (i < e.length) {
    console.log(e[i]);
    i++;
}

// do while loop
let f = [10, 20, 30, 40, 50];
let j = 0;
do {
    console.log(f[j]);
    j++;
} while (j < f.length);



