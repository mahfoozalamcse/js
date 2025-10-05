// function

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet("Mahfooz");

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// method invocation
const user = {
    name: "Mahfooz",
    greet: function () {
        return `Hello, ${this.name}!`;
    },
};
console.log(user.greet());

// 3. constructor invocation
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const mah = new Person("Mahfooz", 23);
console.log(mah.name);

// 4. indirect invocation

function greet(greeting) {
    return `${greeting}, ${this.name}!`;
}
const user1 = { name: "Mah" };
console.log(greet.call(user1, "Hello"));



// 5. apply()

function greet(greeting) {
    return `${greeting}, ${this.name}!`;
}
const user3 = { name: "Raj" };
console.log(greet.apply(user, ["Hi"]));

// 6. bind()

function greet(greeting) {
    return `${greeting}, ${this.name}!`;
}
const user4 = { name: "Mahfooz" };
const boundGreet = greet.bind(user);
console.log(boundGreet("Hii"));

// 7. self invoking function
(function () {
    console.log("This is a self-invoking function!");
})();


// 8. Arraow function
const user5 = {
    name: "Mahfooz5",
    greet: () => {
        return `Hello, ${this.name}`; 
        // `this` here is not bound to `user`
    },
};
console.log(user.greet()); // print Hello undefined





