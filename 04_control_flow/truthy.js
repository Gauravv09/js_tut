

// const userEmail = "G@Gaurav.ai"

// Ab hota kya hai ki bina compare kiye bhi condition true ya false return krte hai by assuming jo value 
// di gayi hai wo true hai ya false.
// jin value ko true maan liya jata hai , called truthy values.
// jin values ko false maan liya jaata hai , called falsy values.

/* if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
} // Got user email

if ("") {
    console.log("Got user email");
} else {
    console.log("Dont have user email"); 
} // Dont have user email

if ([]) {
    console.log("Got user email");
} else {
    console.log("Dont have user email"); 
} // Got user email */


/* falsy values: 
false
0
-0
BigInt 0n
""
null
undefined
NaN
inke alawa jo bhi hai sab truthy values hai.

*/ 



/* truthy values:
"0"
'false'
" "
[] // empty array
{} // empty object
function(){} // empty function



/* // to check array or objects are empty or not:
 const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}  //Array is empty


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} // Object is empty */

// Some comparisons:
// false == 0 // true
// false == "" // true
// 0 == ""  true




