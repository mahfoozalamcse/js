function outer(){
    let counter = 6;
    return function inner() {
        counter++;
        return counter;
    }
}
let increement = outer();
console.log(increement());
