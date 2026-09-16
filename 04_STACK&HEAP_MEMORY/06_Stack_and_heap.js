//Stack memory is a memory area used for managing function execution and storing local execution information.
// its follows: LIFO = Last In, First Out
// Why is Stack Fast? - The stack is highly organized.
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();

//Heap memory is a larger, dynamically managed area of memory where JavaScript can allocate objects and other dynamically sized data
let student = {     // The variable student has a reference to the object
    name: "Ritesh",
    age: 20
};

console.log(student);