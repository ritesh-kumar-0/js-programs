const accountId = 12345;
// let creates a variable whose value can be changed later 
let accoutEmail = "example@gmail.com";
//var is also used to create variable , and its value can be changed 
/* Prefer not to use var
because of issue in block scope and functional scope 
*/
var accountPassword = "34567";
let accountCity = "Patna";
let accountState; // output undefined 

// customerId = 23456  not allowed , because const creates variables whose value cannot be reassigned .
// here , customerId has the value 12345  
accountEmail ="hr23@gmail.com";
accountPassword = "8765";
accountCity = "Bettiah";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// console.log() is used to print a value to the console/terminal 
