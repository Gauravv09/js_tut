// promise is an object representing the eventual complEtion or failure of an asynchronous operation.
/* // promise creation
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // to connect resolve with .then() such that .then() executes
    },1000)
} )

// promise consumption
// ye .then() mai call back function automatically ek argument receive krta hai jo bhi value return hui upar ke fn mai 
promiseOne.then(function () {
    console.log("Promise Consumed");
})  // Async task is complete
Promise Consumed

*/

// Another Approach
/* new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
}) // Async task 2
Async 2 resolved 

*/


/* const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Gaurav", email: "Gaurav@example.com"}) // resolve ke saath data send krna
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user); // { username: 'Gaurav', email: 'Gaurav@example.com' }
})
 */

// ab zaroori nahi ki promise hamesha resolve ho hi jaaye , rejeect bhi to ho skti hai.
/* const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username:"Gaurav", password:"123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// then() resolution le liye , catch error catch krne ke liye.
//promiseFour.then().catch()

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    // pichle this() ka returned value is this mai as argument leliya, so now you are able to print username
    console.log(username);
}).catch(function (error) {
    console.log(error); // ERROR: Something went wrong , set error as false you will be to get values.
}).finally(() => console.log("The Promise is either resolved or Rejected")) // kuch execute ho na ho finally execute hoga hi. */



/* const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// Another Approach to cosume promise, but iska ek issue hai ki ye rejection ke liye catch ki jagah try catch block lagana pdega
async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}
    }

consumePromiseFive() */




/* async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // it takes time for conversion into json format so usko bhi await karana padega.
        const data = await response.json() // response ko json bana rahe , kyuki jo response hai is case mai string mai aaaraha hai.
        
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers() */


/* // isse bhi same hi result aane wala hai
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch((error) => console.log(error)) */


