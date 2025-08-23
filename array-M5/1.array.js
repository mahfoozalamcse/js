/**
 * Arrays --> Non-Primitive Data Type
 */

let s1 = "Mahfooz";
let s2 = "Alam";
let s3 = "Riya";
let s4 = "Adarsh";


let studentsName = ["Mahfooz", "Adarsh", "Riya", "Ashish", "Jay", "Piyush", "Amit", "Kirti", "Sadaf", "Uzair"];

let arrLength = studentsName.length;

for (let i=0; i<arrLength; i++){
    console.log(studentsName[i]) // studentsName[10]
}

/** for let of */

// for (let name of studentsName){
//     console.log(name);
// }

/** for let in */

// for (let index in studentsName){
//     console.log(studentsName[index])
// }
