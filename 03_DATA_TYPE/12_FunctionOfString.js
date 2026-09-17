// String And Their Function 
//       STRING METHODS IN JS


let name = "Ritesh Kumar";


// 1. length
// Remember: length = count characters
console.log(name.length); // 12 


// 2. toUpperCase()
// Remember: make CAPITAL letters
console.log(name.toUpperCase()); // RITESH KUMAR


// 3. toLowerCase()
// Remember: make small letters
console.log(name.toLowerCase()); // ritesh kumar


// 4. charAt()
// Remember: get character using index
console.log(name.charAt(0));  // R


// 5. at()
// Remember: get character, negative index also works
console.log(name.at(-1));  // r


// 6. includes()
// Remember: check something is present or not
console.log(name.includes("Ritesh"));  // true


// 7. startsWith()
// Remember: check starting
console.log(name.startsWith("Ritesh"));  // true


// 8. endsWith()
// Remember: check ending
console.log(name.endsWith("Kumar"));  // true


// 9. indexOf()
// Remember: find first position
console.log(name.indexOf("K"));  // 7


// 10. lastIndexOf()
// Remember: find last position
console.log(name.lastIndexOf("r"));  // 11


// 11. slice()
// Remember: cut/extract part of string
console.log(name.slice(0, 6));  // Ritesh


// 12. substring()
// Remember: also extract part
console.log(name.substring(0, 6));  // Ritesh


// 13. replace()
// Remember: replace first value
console.log(name.replace("Ritesh", "Rahul")); // Rahul Kumar



// 14. replaceAll()
// Remember: replace all values
let text = "Ritesh Ritesh Ritesh";

console.log(text.replaceAll("Ritesh", "Rahul")); // // Rahul Rahul Rahul



// 15. trim()
// Remember: remove spaces from both sides
let newName = "   Ritesh Kumar   ";

console.log(newName.trim()); // Ritesh Kumar



// 16. trimStart()
// Remember: remove space from START
console.log(newName.trimStart());


// 17. trimEnd()
// Remember: remove space from END
console.log(newName.trimEnd());


// 18. split()
// Remember: String → Array
console.log(name.split(" ")); // ["Ritesh", "Kumar"]



// 19. concat()
// Remember: JOIN strings
let first = "Ritesh";
let last = "Kumar";

console.log(first.concat(" ", last)); // Ritesh Kumar


// 20. repeat()
// Remember: repeat the string
console.log(name.repeat(2)); // // Ritesh KumarRitesh Kumar



// 21. padStart()
// Remember: add characters at START
let num = "5";

console.log(num.padStart(3, "0")); //005


// 22. padEnd()
// Remember: add characters at END
console.log(num.padEnd(3, "0")); // 500