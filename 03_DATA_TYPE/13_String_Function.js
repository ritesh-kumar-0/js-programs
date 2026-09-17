let name = "Ritesh Kumar"

const newString = name.substring(0, 4)
console.log(newString);

const anotherString = name.slice(-8, 4)
console.log(anotherString);

const newString1 = "   Ritesh   "
console.log(newString1);
console.log(newString1.trim())

const url = "https://ritesh.com/ritesh%20gupta"
console.log(url.replace('%20', '-'));

console.log(url.includes('Ritesh'))

console.log(name.split(" "));
