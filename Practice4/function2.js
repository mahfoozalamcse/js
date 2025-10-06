// First-Class Function


// 1. Assighning function to a variable

const greetMessage = function() {
    console.log("Hello, Mahfooz. Welcome to Google");
};

greetMessage(); // Output: Hello, Mahfooz. Welcome to Google

// 2. Passing a Function as an Argument to Another Function
function wrapperFunction() {
    return "Welcome to Meta";
}

function greetMessage(wrapper, name) {
    const message = wrapper();
    console.log(`${name}, ${message}`);
}

greetMessage(wrapperFunction, "Mahfooz"); // Output: Mahfooz, Welcome to Meta

// 3. Returning a Function from Another Function
function greetMessage() {
    return function() {
        console.log("Mahfooz, welcome in Rippling.. ");
    };
}

const output = greetMessage();
output();



// 
