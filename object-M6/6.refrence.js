/**
 * Object Reference & Shallow Copy
 */

const person1 = {
    name: "Mahfooz",
    age: 25,
    address: {
        city: "Delhi",
        state: "UP"
    }
}

const person2 = Object.assign({}, person1);

person2.name = "Ashish";
person2.address.city = "Gurugram";
person2.address.state = "Haryana";
person1.age = 23;

console.log(person1);
console.log(person2);









// const person2 = person1;

// person2.name = "prakash";
// person1.age = 111;

// console.log(person1);
// console.log(person2);