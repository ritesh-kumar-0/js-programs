let student1 = {
    name: "Ritesh"
};

let student2 = student1; // refer to the same object

student2.name = "Rahul";

console.log(student1.name); // Rahul 
console.log(student2.name); // Rahul 

// Why did student1 change when I changed student2?
// Ans -> Because both variables refer to the same object
// Stack student1 and Student2    refer to the same objet Name Ritesh  in Heap

