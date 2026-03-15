// Take name as input and print it.
const prompt = require("prompt-sync")({sigint:true});
let name = prompt("Enter youur name: ");
console.log("Your name is: "+ name);