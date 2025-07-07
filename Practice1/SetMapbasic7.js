// set and map
const studentId = new Array();
studentId.push(1);
studentId.push(2);
studentId.push(1);
console.log({studentId});

// when need unique not use array
// than use set
const studentIdss = [1, 2, 3, 6, 1, 2, 3];
const studentIds = new Set(studentIdss);

console.log({studentIds});

// convert in array
const newId = [...studentIds];
console.log({newId});

const newList = new Set();
newList.add(1);
newList.add(2);

newList.clear();
newList.add(3);
console.log({newList});

console.log(newList.size);
console.log(newList.delete());
console.log({newList});






