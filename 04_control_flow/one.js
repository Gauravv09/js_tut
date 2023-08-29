// if
// if mai jo bhi condition wo true ya false mai evaluate hoti hai
// evaluate hoke true hoga to if ka code block exeucte hoga
// evaluate hoke true hoga to if ka code block exeucte nahi hoga
/* if(2 === "2"){
    console.log("executed");
} */

// === checks type as well
// <, >, <=, ==, !=, ===


// if-else , dono mai se koi ek chlega
/* const temperature = 40
if(temperature ===40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute"); */ 

// case 1:
/* const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // global scope mai to power hai hi nahi. */

// case 2:
/* if(score > 100){
    var power = "fly"
    console.log(`User power: ${power}`);
}
 console.log(`User power: ${power}`); // since var use kiya tha to ab power bhi global scope mai hai. */

 //short-hand if condition uses implicit scope (maan liya ki scope hai waha)
/* const balance = 1000
if(balance > 500) console.log("test"); */

// you can also write multiple lines with short-hand if using ,  but its very immature code.
//if (balance > 500) console.log("test"), console.log("test2");

/* const  balance = 1000

 if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
 
 */



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
}



// Nullish Colescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1); // 5
// to fir ?? ka fayda kya? 
// kai baar kya hota hai , jab aap database se call krenge to directly response nhi milta hai,
// balki do values milti hai , chances hai uske null response ya undefined (response aaye hi na) aane ke,
// ?? is problem ko solve krta hai. ki jab null ya undefined response to kya karo.

// How? ?? checks safety for null and undefined value for a program.
let val2;
/* val2 = null ?? 10
console.log(val2); // 10

var1 = undefined ?? 15
console.log(var1); // 15

var2 = null ?? 10 ?? 15 // aise case mai pehli value assign hojati hai mtlb 10
console.log(var2); // 10 */


// ternary Operator

// condtion ? true : false

/* const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // less than 80 */









