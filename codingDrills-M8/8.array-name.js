/**
 * Create an array of names of senoir employees
 */

const employees = [
  {
    name: "Mahfooz",
    numOfYears: 1,
  },
  {
    name: "Ashish",
    numOfYears: 2,
  },
  {
    name: "Riya",
    numOfYears: 1,
  },
  {
    name: "Jay",
    numOfYears: 1,
  },
  {
    name: "Prakash",
    numOfYears: 4,
  },
];

const result = employees
  .filter((employee) => employee.numOfYears > 3)
  .map((employee) => employee.name);
console.log(result);