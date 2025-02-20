// promise creation
function fetchData() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
          let success = true;
          if (success) {
            resolve("data fetch successfully.. ")
          }else{
            reject("data rejected some error fetch data.. ")
          }
        }, 3000);
    })
}
// promise consumption
// let responce = fetchData();
// console.log(responce); // pending mode
// fetchData()
//          .then(() => {}) // chaining
//          .then(() => {})
//          .catch(() => {})

fetchData()
          .then((data)=> {
            console.log(data);
            return `Mahfooz`;
           //return data.toLowerCase();
          })
          .then((value) =>{
             console.log(value)
            })
          .catch((error)=> console.error(error));

// let responce = fetchData();
// console.log(responce);          