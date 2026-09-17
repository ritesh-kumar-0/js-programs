
const name = "Ritesh"
const repoCount = 50

// console.log(name + repoCount + "value"); its not good method 

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('RiteshFire')
console.log(gameName[0]);  // R
console.log(gameName.__proto__); // {}

//length() - Returns the number of characters in a string
console.log(gameName.length);// 10

//toUpperCase() -Converts the string into uppercase letters
console.log(gameName.toUpperCase()) // RITESHFIRE

//charAt() - Returns the character at a particular index
console.log(gameName.charAt(2)); // t

// at() - Similar to charAt(), but it can also use negative indexes.
console.log(gameName.at(-1)) // e

//indexOf() - Returns the index of the first occurrence of a character or word
console.log(gameName.indexOf('t')) // 2

