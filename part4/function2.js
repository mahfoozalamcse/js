// take function inside function
// passed function as variable

function makeTea(typeofTea){
    return `make tea ${typeofTea}`
};
function orderTea(teaFunction){
    return teaFunction('earl grey');
}
let proceesOrder = orderTea(makeTea);
//console.log(proceesOrder);


// function pass inside function is example of higher order eg. foreach loop use 

// practice
function createTeaMaker(name){
    let score = 100;
    return function(teaType){
        return `Making ${teaType} and strange js ${name} is ${score}`
    };
}


let teaMake = createTeaMaker("mahfooz");
let result = teaMake("Lamon tea");
console.log(result);


