// generator
function* generaterNumber(){
  yield 1;
  yield 2;
  yield 3;
}
let gen = generaterNumber();
let gen2 = generaterNumber();
console.log(gen); // object genrator 
//console.log(gen()); // is not a function
// iterator
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


console.log(gen2.next().value);




