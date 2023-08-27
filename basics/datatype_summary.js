// Primitive

// 7 Types: STRING , Number , Boolean , null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;



const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId); // both are different because of symbol

const bigNumber = 34563456734647586835464647n // now it becomes bigint

// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["Shaktiman", "Naagraj","Doga"]
let myObj = {
    name: "Gaurav",
    age: 20,
}

const myFunction = function(){
    console.log("Hare Krishna");
}

console.log(typeof outsideTemp); // object
console.log(typeof myFunction); //   object Function , non primitves ka data type object hi bola jata hai
