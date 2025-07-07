// Logical operator
// OR ||
// &&
// ! not
// nullish

// let phy = 89;
// let chem = 89;
// let math = 85;

// if (phy >= 85 && chem >= 85 && math >= 85) {
//     console.log("You Eligible for admission.. ");
    
// }else{
//     console.log("Your score less than passing marks.. ");
    
// }

// // 
// let  phy1 = 70;
// let chem2 = 85;
// let math3 = 60;
// if (phy1 >= 85 || chem2 <= 85 || math3 >= 90) {
//     console.log("You eligible");
    
// }else{
//     console.log("Not eligible. ");
    
// }

// // Not
// const isEligible = false;
// if (!isEligible) {
//     console.log("isEligible true..");
    
// }else{
//     console.log("Not Eligible.. ");
    
// }


// const firstName = "Mahfooz";
// const nickName = "Alam";
// console.log(firstName || nickName);
// console.log(Boolean("Mahfooz"));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// falsy value => 0 , null, "", undefined

// const firstName = "";
// const secondName = undefined;
// console.log(firstName || secondName || null);

// let a = 12;
// let b;
// console.log(a+b);
// console.log(a + (b || 0));


// const first = "Mah";
// const second = "Ala";
// console.log(first && second && "hidden");


// Guess output
// console.log(3 || 2 || 1);
// console.log("" || 0 || 2);
// console.log("" || 0 || undefined);
// console.log("" || null || 2);

// console.log(3 && 2 && 1);
// console.log("" && 0 && 2);
// console.log(undefined && null && 0);

// Nullish coalacing ??
let firstName = undefined;
console.log(firstName ?? "Mahfooz");

const a = 0;
console.log(a ?? 1);
let b;
console.log(a + (b ?? 1));












