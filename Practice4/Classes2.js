// Basics of Classes
class User {
    constructor(name, role, isAdmin, isLoggedIn) {
        this.name = name;
        this.role = role;
        this.isAdmin = isAdmin;
        this.isLoggedIn = isLoggedIn;
    }
}

// 
const user1 = new User('Mahfooz', 'SDE', false, true);
const user2 = new User('Alam', 'SDE', false, true);
const user3 = new User('Raj', 'SDE', false, true);

console.log(user1); 
console.log(user2); 
console.log(user3); 

// Adding Methods to a Class
class User {
    constructor(name, role, isAdmin, isLoggedIn) {
        this.name = name;
        this.role = role;
        this.isAdmin = isAdmin;
        this.isLoggedIn = isLoggedIn;
    }

    displayInfo() {
        console.log(`${this.name} is a ${this.role}`);
    }
}

user1.displayInfo();
user2.displayInfo(); 
user3.displayInfo();