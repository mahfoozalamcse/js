/**
 * Average-Age of Family members
 */

const familyMembers = [
  {
    name: "mahfooz",
    age: 23,
  },
  {
    name: "Padma",
    age: 5,
  },
  {
    name: "priya",
    age: 10,
  },
  {
    name: "Prakash",
    age: 22,
  },
  {
    name: "Ashish",
    age: 50,
  },
];

const totalAge = familyMembers.reduce((acc, cur) => acc + cur.age, 0);
const averageAge = totalAge / familyMembers.length;
console.log(averageAge);