// Primitive 
//Classification of JavaScript Data Types
// 1. Primitive  2. Non- Primitive Types 
// JavaScript has 7 primitive data types:
// 1. Number 2. string 3. boolean 4. Undefined 5. Null 6. BigInt 7.Symbol

//JavaScript has 7 primitive data types: Object 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false 

// Reference (non primitive )
// Array, objects, Functions 

const heros = ["shaktiman", "Ritesh"];

let myobj ={
    name: "Ritesh",
    age: 19,
}

const myFunction = function(){
    console.log("Hello , Ritesh");
}
console.log(typeof myFunction); // function object