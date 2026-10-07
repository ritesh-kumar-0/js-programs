// Maths

//console.log(Math);
//console.log(Math.abs(-4));  // 4
//console.log(Math.round(4.6)); // 5
//console.log(Math.ceil(4.2));  // 5
//console.log(Math.floor(4.9)); // 4
//console.log(Math.min(4,5,6,2,8)); // 2
//console.log(Math.max(4, 3, 6, 8)); // 8

//// Math.random() generates a random decimal number, greater than or equal to 0 and less than 1
console.log(Math.random()); // Example output: 0.472839

// Math.random() → 0 to less than 1
// * 10 → 0 to less than 10
// + 1 → 1 to less than 11
console.log((Math.random()*10) + 1); // Example output: 7.38472

//Math.floor() removes everything after the decimal point by rounding DOWN.
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//This generates a random integer from 10 to 20, including both 10 and 20.
console.log(Math.floor(Math.random() * (max - min + 1) ) + min)