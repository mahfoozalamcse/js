// use for loop travese on array and store all element till we get chai

let tea = ["oolong tea", "masala tea", "jaismin tea", "hot tea", "chai", "badam tea"];
let selectedTeas = [];
for (let index = 0; index < tea.length; index++) {
    if (tea[index] === 'chai') {
        break;
    } 
    selectedTeas.push(tea[index]);
}
console.log(selectedTeas);

// scip jasmin tea 
let tea1 = ["oolong tea", "masala tea", "jaismin tea", "hot tea", "chai", "badam tea"];
let selectedTeas1 = [];
for (let index = 0; index < tea1.length; index++) {
    if (tea1[index] === 'jaismin tea') {
        continue;
    } 
    selectedTeas1.push(tea1[index]);
}
console.log(selectedTeas1);

// use for of loop and itrate over 1 to 5 and than store till before 4 find
let num1 = [1, 2, 3, 4, 5];
let newNum = [];
for (const element of num1) {
    if (element === 4) {
        break;
    }
    newNum.push(element);
}
console.log(newNum);

// traverse number use for of loop if find 3 than scipe
let num2 = [1, 2, 3, 4, 5];
let newNum2 = [];
for (const element of num2) {
    if (element === 3) {
        continue;
    }
    newNum2.push(element);
}
console.log(newNum2);

// use for in loop contain population and store till find berlin stop store in newPopulaton
let cityPopulation = {
    "London" : 129000,
    "Tokyo"  : 1390000,
    "Bankok" : 1240000,
    "Berlin" : 2300000,
    "Dubai"  : 4580000,

}

let newPopulaton = [];
for (const key in cityPopulation) {
    if (cityPopulation[key] === 2300000) {
        break;
    }

    newPopulaton[key] = cityPopulation[key]

    // if (Object.prototype.hasOwnProperty.call(cityPopulation, key)) {
    //     const element = cityPopulation[key];
    //     newPopulaton.push(element);
    // }
};
console.log(newPopulaton);

// new skipe element
let worldPopulation = [];

for (const city in cityPopulation) {
    if (cityPopulation[city] < 1250000) {
        continue;
    }
   worldPopulation[city] = cityPopulation[city];
}
console.log(worldPopulation);

// use for each loop and store till find Dubai stop

