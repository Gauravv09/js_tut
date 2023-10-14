const score = 400
console.log(typeof score); // number

const balance = new Number(100)
console.log(balance); // [Number: 100]
const str_balance = balance.toString(); 
console.log(typeof str_balance); // string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00, after . two tak round off

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); //23.9,  kitne digits pe focus krna hai

const num = 123.8966

console.log(num.toPrecision(3));

const num1 = 1123.8966

;

console.log(num1.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

/* console.log(Math); // inspect se console pe print krne se properties show hongi.
console.log(Math.abs(-4)); // -ve values ko +ve
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8)); */

console.log(Math.random()); // gives values between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // to guarantee minm value will be 1 and not 0

const min = 10
const max = 20

Math.random()

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 



