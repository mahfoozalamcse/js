// Prototype
let user = {
    name: "Mahfooz",
    role: "SDE"
    
};

console.log(user);

// Creating Custom Prototypes
const admin = {
    isAdmin: true
};
​
let user2 = {
    name: "Mahfooz",
    role: "SDE",
    __proto__: admin
};
​
console.log(user2.isAdmin); // Outputs: true

// Prototype Chaining
const loggedInStatus = {
    isLoggedIn: true
};

admin.__proto__ = loggedInStatus;

console.log(user.isLoggedIn); // Outputs: true

// Overriding Prototype Methods
JavaScriptuser.showMessage = function() {
    console.log("Hello, User!");
};

admin.showMessage = function() {
    console.log("User is an admin.");
};

user.showMessage(); // Outputs: "Hello, User!"
