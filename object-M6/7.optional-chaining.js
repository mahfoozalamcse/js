/**
 * Optional Chaining ?.
 */

const user = {
    name: "Mahfooz",
    age: 23,
    address: { // optional
        street: "crosingg",
        city: "Noida"
    },
    likes: "Eat Sing Sleep Repeat",
    getDisplayMessage: function () {
        console.log("Welcome Mahfooz")
    }
}

// Sol 01

// if (user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("address not found")
// }

// Sol 2
console.log(user.address?.city);

// user.getDisplayMessage();
// console.log(user.getDisplayAddress?.());

console.log(user.hobbies);