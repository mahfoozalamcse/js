const Person = {
    name : "Mahfooz",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    }
};
Person.greet();
// when you copy than lost context this
let greeting = Person.greet;
greeting();

// you need bind than execute
let bindGreet = Person.greet.bind({name : "Mahfooz"});
bindGreet()


// practice bind call and apply