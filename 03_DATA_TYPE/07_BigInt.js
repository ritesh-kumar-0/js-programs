/**BigInt is a data type used to represent integers larger than the maximum safe 
 * integer that can be reliably represented by the JavaScript Number type. */

//A BigInt is created by adding n at the end of an integer
let a = 9007199254740993n;
let b = 2n;

console.log(a + b);

console.log(typeof a);// bigint