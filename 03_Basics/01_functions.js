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
console.log("Result: ", result); // undefined , kyuki function kuch return ni krra tha */


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    // console.log("Gaurav"); // function ke return ke baad kuch execute ni hota
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

