let a = 10;
let b = a;

b = 20;

console.log(a);  // 10 
console.log(b); // 20 

/** Why ? - Because b gets the value of a 
 Conceptually: a -> 10 , b -> 10 Then: b = 20  
 Now : a -> 10 , b -> 20

 Changing b does not change a. 
 */