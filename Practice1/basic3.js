// Ternary operator
const isResult = 79;

// if (isResult < 40) {
//     console.log(`You not clear exam do hard work`);
    
// }else{
//     console.log(`You clear exam Great...`);
    
// }

// change in ternary operator
// syntex
// condition ? yes : no

// (isResult < 40) ? console.log(`You not clear exam do hard work`) : console.log(`You clear exam Great...`);

// // you also write
// const result = (isResult < 40) ? "You need work hard.. ":"You clear exam great.. ";
// console.log(result);

// practice question convert in ternary 

const totalMarks = 80;
if (totalMarks <= 40) {
    console.log(`very poor marks you need hard work...`);
    
}else if (totalMarks <= 40) {
    console.log(`You pass..`);
    
}else if (totalMarks <= 60) {
    console.log("you get A Gread. ");
    
}else if (totalMarks <= 70) {
    console.log("You get A+ Gread.. ");
    
}else if (totalMarks <= 80) {
    console.log("You Genious..");
    
}else{
    console.log("You enter right marks");
    
}

// convert in ternary
const result = (isResult <= 40)?"very poor marks you need hard work...":(isResult <= 40) ? "You pass.. ":(isResult <= 60)?"You Get A Gread. ":(isResult <= 70)?"You get A+ Gread.. ":(isResult <= 80) ? "You Genious.. ":"You enter right marks";

console.log(result);



