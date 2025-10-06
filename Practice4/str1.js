// How to Iterate Over Characters of a String in JavaScript ?
// 1. for
let str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 2. for of
let str1 = "mah";
for (let char of str1) {
    console.log(char);
}

// 3. for each
let str3 = "Hello";
str3.split('').forEach((char, index) => {
    console.log(`${index}: ${char}`);
});



// 4. Using charAt() Method with while Loop
let str4 = "Hello";
let index = 0;
while (index < str4.length) {
    console.log(str.charAt(index));
    index++;
}

// 5. use reduce
let str5 = "Hello";
let result = str5.split('').reduce((acc, char) => acc + char, '');
console.log(result); // Outputs: "Hello"

// 6. use for in loop
let str6 = "Hello";
for (let index in str6) {
    console.log(str6[index]);
}

// JavaScript String charCodeAt() Method
function func() {
    let str = 'MAH';
    let value = str.charCodeAt(0);
    console.log(value);
}

func();

// JavaScript String indexOf() Method
// Original string
let str7 = 'Departed Train';

// Finding index of occurrence of 'Train'
let index1 = str.indexOf('Train');
console.log(index);

// javaScript String includes() Method
// string.includes(searchvalue, start)

let str8 = "Welcome to mahfooz.";
let check = str8.includes("mah");
console.log(check);

// JavaScript String toUpperCase() Method
// str.toUpperCase()
// str.toLowerCase();
// string.substring(startIndex, endIndex);
// str.trim();