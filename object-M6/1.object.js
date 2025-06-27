/**
 * Objects --> {key: value} 
 */

//Object Literal
const personObject = {
    name: "Mahfooz", //property
    age: 23,
    job: "intern",
    course: ["html", "css", "js", "reactjs"],
    "is Admin": "true"
}; 

// console.log(personObject.age);
// console.log(personObject.name);


console.log(personObject["name"]);
console.log(personObject["job"]);
console.log(personObject["is Admin"]);