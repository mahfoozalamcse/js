let a = 'Mahfooz';
console.log(`hello ${a}`);

let n1 = 5;
let n2 = 10;
console.log(`The sum of ${n1} and ${n2} is ${n1 + n2}`);

const s = `This is a multi-line
           string that that you write in multiple
           several lines.`;
console.log(s);


function greet(strings, name1) {
    return `${strings[0]}${name1.toUpperCase()}${strings[1]}`;
}

const name1 = 'mahfooz';
console.log(greet`Hello, ${name1}!`);

const printBacktickAndDoller = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(printBacktickAndDoller);

// html use
const title = "Welcome Mahfooz";
const html = `<h1>${title}</h1>`;
console.log(html);

// conditional in template litrals
const mahfooz = true;
const user = `User : ${mahfooz ? "mahfooz" : "Guest"}.`;
console.log(user);

// Loops with tempalates litrals
const fruits = ["apple", "banana", "cherry"];
const list = `Fruits : ${fruits.map(item => `\n- ${item}`)}`;
console.log(list);

// embading function
const toUpper = str => str.toUpperCase();
const output = `Print : ${toUpper("hello")}`;
console.log(output);