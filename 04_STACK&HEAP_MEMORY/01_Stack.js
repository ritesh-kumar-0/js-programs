//Stack and Heap are memory areas used by the JavaScript runtime to manage values and objects.
//Stack memory is a memory area used for storing execution-related data and,
//conceptually, primitive values and references associated with function execution

//It works in a Last In, First Out (LIFO) manner

// stack(Primitive ), Heap (Non-primitive )

let myName = "Ritesh Kumar"

let anothername = myName
anothername = "Kumar Ritesh"

console.log(myName);   // Ritesh Kumar
console.log(anothername); // Kumar Ritesh 

let userOne = {
    emailP: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "fitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
