// iterate over string
let user = "I am student in ABES Engg. college Ghaziabad";
for (let index = 0; index < user.length; index++) {
    const element = user[index];

    if (user[index] === "A") {
        console.log(index);
        
    }

    console.log(element);
    
    
}

let count = 0;
for (let char of user){
    if (char === "e"){
        count++
    }
}
console.log(count);
