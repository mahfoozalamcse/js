/**
 * Destructuring Objects
 */

 let obj = {
    name: "Mahfooz",
    address: {
        state: "UP",
        city: "Noida",
        locality: "Crossing"
    },
    courses: ['html', 'css', 'js', 'reactjs', 'redux'],
}

// let {address: {city}} = obj;
// console.log(city)














const employees = {
    engineers: {
        em1: {
            id: 1,
            name: "Mahfooz Alam",
            occupation: "Front End Engineer and backend engineer"
        },
        em2: {
            id: 2,
            name: "Prakash viswakarma",
            occupation: "Data Scientist"
        },
    },
    placement: {
        em3: {
            id: 3,
            name: "Sakshi Awasthi",
            occupation: "Sr. Executive",
            achi:{
                first: "",
                second: "",
                third: ""
            }
        }
    },
    youtube: {
        em4: {
            id: 4,
            name: "Farhan",
            occupation: "Youtube Manager"
        },
    }      
}


// let {engineers: {em2: {name, occupation}}} = employees;
// console.log(name, occupation);

let {youtube : {em4: {name, occupation}}} = employees;
console.log(name, occupation);