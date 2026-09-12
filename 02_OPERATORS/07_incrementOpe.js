//The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed
let x = 3;
const y = x++; // Postfix 

console.log(`x:${x}, y:${y}`);
// Expected output : "x:4, y:3"

let a = 3;
const b = ++a; // Prefix 

console.log(`a:${a}, b:${b}`);
// output "a:4, b:4"