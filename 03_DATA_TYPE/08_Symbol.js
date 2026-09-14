//A Symbol is a primitive data type used to create unique identifiers.
let id = Symbol("id");

let student = {
    name: "Ritesh",
    [id]: 101
};

console.log(student.name); // Ritesh
console.log(student[id]); // 101

//Symbols can be used as special object keys

console.log(typeof student );// object