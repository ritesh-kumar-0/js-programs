//avaScript Date get methods are used to retrieve a specific part of a Date object, such as its day, month, year, or time.

/** The getDate() method returns the day of the month, from 1 to 31, 
 * according to the local time. */

// Create a date for 22 October 2026
let myDate = new Date(2026, 9, 22);

// Get the day of the month
console.log(myDate.getDate()); // Output: 22

//The getMonth() method returns the month index from 0 to 11.
// Get the month index
console.log(myDate.getMonth()); // Output: 9

// Add 1 to get the human-readable month number
console.log(myDate.getMonth() + 1); // Output: 10

/**The getFullYear() method returns the full year, such as 2026, 2027, or 2030. */
// Get the full year
console.log(myDate.getFullYear()); // Output: 2026

// Get the hour
console.log(myDate.getHours()); // Output: 0 