// Async and Await in JavaScript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();

// Syntex
async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// async() function
const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));

// await()
const getData2 = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData2();
console.log(2);

// Error handling in async and await
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//  Callback Hell
function fetchData(callback) {
    console.log('Data fetched');
    callback();
}

function processData(callback) {
    console.log('Data processed');
    callback();
}

function displayData() {
    console.log('Data displayed');
}

// Callback Hell
fetchData(function () {
    processData(function () {
        displayData();
    });
});

// Solutions to Callback Hell
// 1. Modularizing Code
function getData(callback) {
    getDataFromAPI(callback);
}

function parseAndProcessData(data, callback) {
    parseData(data, function (parsedData) {
        processData(parsedData, callback);
    });
}

getData(function (data) {
    parseAndProcessData(data, function (finalData) {
        saveData(finalData, function (savedData) {
            sendEmail(savedData, function (response) {
                console.log('Email sent!', response);
            });
        });
    });
});

//2. promises
getDataFromAPI()
    .then(parseData)
    .then(processData)
    .then(saveData)
    .then(sendEmail)
    .then(response => {
        console.log('Email sent!', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// 3. Async and await
async function handleData() {
    try {
        const data = await getDataFromAPI();
        const parsedData = await parseData(data);
        const processedData = await processData(parsedData);
        const savedData = await saveData(processedData);
        const response = await sendEmail(savedData);
        console.log('Email sent!', response);
    } catch (error) {
        console.error('Error:', error);
    }
}

handleData();

// 

