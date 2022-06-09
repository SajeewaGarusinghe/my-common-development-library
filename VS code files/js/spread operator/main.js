
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'frid'];

const weekend = ['sat', 'sun'];
const week = [...weekdays, ...weekend];
console.log(week); //Array(7) [ "mon", "tue", "wed", "thurs", "frid", "sat", "sun" ]
////////////////////
function add(num1, num2) {
  console.log(`addition equls to=${num1 + num2}`);
}
const nums = [34, 23];
add(...nums); //addition equls to=57

const obj1 = {
  value1: 23,
  value2: 56,
  value3: 45,
};
const obj2 = {
  value4: 235,
  value5: 565,
  value6: 457,
};

const objMerged = {
  ...obj1,
  ...obj2,
};
console.log(objMerged); //Object { value1: 23, value2: 56, value3: 45, value4: 235, value5: 565, value6: 457 }
