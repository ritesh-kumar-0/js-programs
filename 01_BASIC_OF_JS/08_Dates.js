// Dates 
// Create a new Date object that stores the current date and time
let myDate = new Date()

// Print the date and time in ISO format (UTC)
console.log(myDate)   // output:  2026-10-22T17:33:29.512Z

// Convert the date and time into a readable string
// It displays the date, time, and local time zone
console.log(myDate.toString()); // output: Thu Oct 22 2026 23:05:00 GMT+0530 (India Standard Time)

// Print only the day, month, and year
console.log(myDate.toDateString()); //output:  Thu Oct 22 2026

// Print the date and time according to the system's locale settings
console.log(myDate.toLocaleString()) //output:  22/10/2026, 11:06:54 pm

// Check the data type of myDate
console.log(typeof myDate);  // output: object 


