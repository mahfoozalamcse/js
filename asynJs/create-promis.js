/**
 * Promise
 */

const isRequestSuccessful = false;

const db = [
  { id: 1, name: "mahfooz" },
  { id: 2, name: "prakash" },
];
let promise = new Promise((resolve, reject) => {
  if (isRequestSuccessful) {
    setTimeout(() => resolve(db), 3000);
  } else {
    const error = new Error("Something went wrong");
    reject(error.message);
  }
});


promise
  .then((response) => console.log(response))
  .catch(function (err) {
    console.log(err);
  });
