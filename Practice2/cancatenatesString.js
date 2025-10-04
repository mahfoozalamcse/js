// use template literal
// let fName = "Mahfooz";
// let lName = "Alam";

// let fullName = `${fName} ${lName}`;

// console.log(fullName);

//2. using + operator
// let result = fName + " " + lName;
// console.log(result);

// // 3. using concate
// let fullName = fName.concat(" ", lName);
// console.log(fullName);


// // 4. join array
// let a = ["Hello", "world", "from", "Mahfooz"];
// let s = a.join(" ");
// console.log(s);

// 5. Using String.fromCharCode() and reduce() 
let arr = [72, 101, 108, 108, 111];

let result = arr.reduce((acc , code) => acc + String.fromCharCode(code), "");


console.log(result);









