// Closures
function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // Returns the innerFunction
myClosure(); // Executes innerFunction, logs 10

// maintaining state with closer
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// 
function createFunctions() {
    let functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

// 
function createFunctions() {
    let functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const func2 = createFunctions();
func2[0](); // 0
func2[1](); // 1
func2[2](); // 2



