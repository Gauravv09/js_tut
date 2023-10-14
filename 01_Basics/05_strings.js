const name = "Gaurav"
const repoCount = 50

console.log(name + repoCount + " Value"); // Gaurav50 Value
// Better Approach : String Interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Gaurav and my repo count is 50

 const gameName = new String('Gaurav-Choudhary');
/*
console.log(gameName[0]); // G
console.log(gameName.__proto__); // {}

 console.log(gameName.length); // 16
console.log(gameName.toUpperCase()); // this hasnt changed original string. // GAURAV-CHOUDHARY
console.log(gameName.charAt(2)); // u
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4) // Gaur, last value not included
//console.log(newString);

const anotherString = gameName.slice(5, -3) // v-Choudh, here can also provide negative values but cant do that with substring
console.log(anotherString);
/* */
/* const newStringOne = "     Gaurav     "
console.log(newStringOne); //     Gaurav
console.log(newStringOne.trim());//Gaurav , removed spaces

const url = "https://Gaurav.com/Gaurav%20Choudhary" 

console.log(url.replace('%20', '-'))// // https://Gaurav.com/Gaurav-Choudhary
console.log(url);// https://Gaurav.com/Gaurav%20Choudhary
console.log(url.includes("Gaurav")); // true */

console.log(gameName.split('-')); //[ 'Gaurav', 'Choudhary' ], split on the basis of 