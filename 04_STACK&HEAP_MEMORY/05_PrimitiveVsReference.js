// Primitive vs Reference
let x = 10;
let y = x;

y = 50;

console.log(x); // 10 
console.log(y); // 50
// They have independent primitive values.


// Now object 

let j = {
    value: 10
};

let k = j; // Both references point to the same object.

k.value = 50;

console.log(j.value); //50
console.log(k.value); //50