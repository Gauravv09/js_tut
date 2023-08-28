// to declare a function in js
/* function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
} */

// to execute a function () , to reference a function just write function name without()

// sayMyName()

/* function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
} */

/* addTwoNumbers() // Nan
addTwoNumbers(3,4) // 7
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, "a") // 3a
addTwoNumbers(3, null) // 3 */

// func defn mai jo input lete hai use kehte parameters
// func calling mai jo values pass krte hai use kehte hai arguments

// storing functions value in some literal
/* const result = addTwoNumbers(3, 5)
console.log("Result: ", result); // undefined , kyuki function kuch return ni krra tha bs print krra tha */


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    // console.log("Gaurav"); // function ke return ke baad kuch execute ni hota
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);



/* function loginUserMessage(username){
    if(username === undefined){ // condition could be even !username
        console.log("Please enter a username: "); 
        return //ye return execute hogya to baaki ka kuch niche likha kaam nhi krega , even second return bhi nahi.
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("Gaurav")); // Gaurav just logged in 
console.log(loginUserMessage("")); //just logged in 
console.log(loginUserMessage()); // undefined just logged in  */

/* function loginUserMessage(username = "sam"){
    if(!username){ // condition could be even !username
        console.log("Please enter a username: "); 
        return //ye return execute hogya to baaki ka kuch niche likha kaam nhi krega , even second return bhi nahi.
    }
    return `${username} just logged in `
}

console.log(loginUserMessage("Gaurav")); // Gaurav just logged in 
console.log(loginUserMessage("")); //sam just logged in 
console.log(loginUserMessage()); // undefined just logged in  */

// How to solve this problem? so that we would be able to take multiple inputs from user for some func.
// by using rest operator ... , ... is also called spread operator based on their use cases.
// it will return an array by bundling all the values provided.
/* function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ] */

// one more case
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500)); // [ 500 ]

const user = {
    username: "Gaurav",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}

// handleObject(user) //Username is Gaurav and price is 199
// Or directly pass the object
handleObject({
    username: "sam",
    price: 399
}) // Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray)); // 400
// or pass an array  directly to a func.
console.log([200, 400, 100, 1000]);

