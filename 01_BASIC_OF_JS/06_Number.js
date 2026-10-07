// Creating a constant variable named score
const score = 400
// Print the value of score
console.log(score);

// new Number(100) creates a Number object containing 100
const balance = new Number(100)
console.log(balance);

// Convert balance to a string, "100" has 3 characters
console.log(balance.toString().length); // .length gives the number of characters

// Keep exactly 2 digits after the decimal point
console.log(balance.toFixed(2));  // "100.00"


// Creating a decimal number
const otherNumber = 23.3456

// toPrecision(3) -Return the number with a total of 3 significant digits
console.log(otherNumber.toPrecision(3)) // 23.3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')); //according to the Indian numbering system 
// output:  "10,00,000"