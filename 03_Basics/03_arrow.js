// this keyword is used for referring to current context of an object , all properties and methods in its block scope.
/* const user = {
    username: "Gaurav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
    }
}

 user.welcomeMessage() // Gaurav welcome to website
user.username = 'sam' // yaha se context change krdiya , mtlb value change
user.welcomeMessage() // sam welcome to website */



/* const user = {
    username: "Gaurav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this); // prints current context when func called by an object.
    }
}

 user.welcomeMessage() // Gaurav welcome to website
user.username = 'sam' // yaha se context change krdiya , mtlb value change
user.welcomeMessage() // sam welcome to website 

console.log(this);  // {} , current context is empty as we are in node environment , inspect se kroge to window print hoga , kyuki udhar window hai global object.

 */


/* function chai(){
    console.log(this);
}

chai() // <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Getter/Setter],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [AsyncFunction: fetch],
    crypto: [Getter]
  }  */



/*   function chai(){
    let username = "Gaurav"
    console.log(this.username);
  }

  chai() // undefined , mtlb this objects ke andar hi kaam kr raha hai naa ki functions ke andar. */

/* const chai = function (){
    let username = "Gaurav"
    console.log(this.username);
}
chai() // // undefined , mtlb this objects ke andar hi kaam kr raha hai naa ki functions ke andar. */ 



//Arrow Function:
 const chai = () => {
    let username = "Gaurav"
    console.log(this.username);
    console.log(this);
}

chai() // undefined , next line mai, {} 


/* const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)); */

//Another way of declaring arrow function is implicit return. return likhne ki zarurat nhi hai , kyuki ek line ka statement hai.
/* const addTwo = (num1, num2) =>  num1 + num2


console.log(addTwo(3, 4)); */

// Or ye smjho ki {} use kiya func mai to return statement likhna otherwise , lekin () use kiya to return statement nhi likhna padega.
/* const addTwo = (num1, num2) =>  (num1 + num2)


console.log(addTwo(3, 4)); */

/* const addTwo = (num1, num2) => {username: "Gaurav"} // is tarah object return nhi kr skte
console.log(addTwo(3, 4)); // undefined */

// so return objects like this , thats why use ()

/* const addTwo = (num1, num2) => ({username: "Gaurav"}) // is tarah object return nhi kr skte
console.log(addTwo(3, 4)); // { username: 'Gaurav' } */





// application of arrow function in for each loop:
/* const myArray = [2, 5, 3, 7, 8]
syntax1
myArray.forEach(function () {})
syntax2
myArray.forEach(() => ()) */







