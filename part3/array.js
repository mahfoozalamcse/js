//1. Declare and access first element

let teaFlavour = ["oolang", "green", "hotTea"];
console.log(teaFlavour);


let firstTea = teaFlavour[0];
console.log(firstTea);

// 2. you have array contain tea change second element

let tea = ["oolang", "green", "hotTea", "jaisminTea"];
tea[1] = "masalaTea";
console.log(tea);
 

// use push method add element in array
let cityVisited = [];
cityVisited.push("Varansi");
cityVisited.push("Delhi");
cityVisited.push("Noida");

console.log(cityVisited);

// use pop add last item
let lastTea = tea.pop();
console.log(tea);
console.log(lastTea);

// softCopies creat of tea

let softCopies = tea; // both impact that reason known as softcopies
tea.pop();
console.log(softCopies);

console.log(tea);

// eg variavle like
let var1 = 9;

let var2 = var1;
var1 = 13;
console.log(var1);
console.log(var2);

// creat hard copies
let topCities = ["Berlin", "Singapur", "NewYork"];
let hardCopies = [...topCities];
// let hardCopies = topCities.slice();
topCities.pop();
topCities[0] = "Bengluru";
console.log(topCities);
console.log(hardCopies);

// merge two array
let asianCity = ["Tokyo", "Bankok"];
let uropianCity = ["NewYork", "Berlin"];
let worldCity = asianCity.concat(uropianCity);
console.log(worldCity);

// find length contain in variable city
let city = worldCity.length;
console.log(city);

// check london in world city or not
let isLondon = worldCity.includes("London");
console.log(isLondon);








