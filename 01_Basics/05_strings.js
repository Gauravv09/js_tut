const name = "Gaurav"
const repoCount = 50

console.log(name + repoCount + " Value");
// Better Approach : String Interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Gaurav-Choudhary');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // this hasnt changed original string.
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // last value not included
console.log(newString);

const anotherString = gameName.slice(-3, 4) // here can also provide negative values
console.log(anotherString);

const newStringOne = "     Gaurav     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Gaurav.com/Gaurav%20Choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes("Gaurav"));

console.log(gameName.split('-')); // split on the basis of -



