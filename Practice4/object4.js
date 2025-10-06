// JavaScript Function Binding

const person = {
    name: 'Mahfooz',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
greet();

// 1. bind()
const person1 = {
    name: 'Mahfooz',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet1 = person1.greet;
const boundGreet = greet1.bind(person1);
boundGreet();

// 2. call()
const person3 = {
    name: 'Mah',
    greet: function(city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};
person3.greet('Delhi');
const greet3 = person3.greet;
greet.call(person3, 'Noida');

// apply()
const person4 = {
    name: 'Mahfooz',
    greet: function(city, country) {
        console.log('Hello, ' + this.name + ' from ' + city + ', ' + country);
    }
};
person4.greet('Delhi', 'India'); 
const greet4 = person.greet;
greet.apply(person4, ['Noida', 'Delhi']);

// Arrow function and this binding
const person5 = {
    name: 'Mahfooz',
    greet: function() {
        const arrowGreet = () => {
            console.log('Hello, ' + this.name); 
        };
        arrowGreet();
    }
};
person5.greet();

// 