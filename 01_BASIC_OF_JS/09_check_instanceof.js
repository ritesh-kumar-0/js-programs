//If asked how to check whether a variable contains a valid Date object, you can use:

//console.log(myDate instanceof Date); // true if myDate is a Date object

// Create a new Date object containing the current date and time
let myDate = new Date();

// Print the current date and time
console.log(myDate);  // 2026-10-22T17:56:07.166Z

// Check whether myDate is an instance of the Date class
console.log(myDate instanceof Date); // Output: true

// Create a normal string variable
let myString = "22 October 2026";

// Check whether myString is an instance of the Date class
console.log(myString instanceof Date); // Output: false , because myString is a string, not a Date object.

// Create a number variable
let myNumber = 100;

// Check whether myNumber is an instance of the Date class
console.log(myNumber instanceof Date); // Output: false , because myNumber is a number.