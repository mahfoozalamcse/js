// How to declare object with computed property name in JavaScript ?
// let LAST_NAME = "lastname";
// let fullname = {
//     firstname: "Mahfooz",
//     [LAST_NAME]: "Alam"
// };
// console.log(
//     "My fullname is: " + fullname.firstname
//     + " " + fullname.lastname
// );

// 

let LAST_NAME = "lastname";
let fullname = {
    firstname: "Alam"
};
fullname[LAST_NAME] = "Mahfooz";
console.log(
    "My fullname is: " + fullname.firstname
    + " " + fullname.lastname
);
