// objects declare by literals or constructors

// Singleton ka mtlb hota hai , koi bhi object constructor se banate hai to wo ek apni tarah ka object bnta hai
// lekin jab dusre  tarah se object banate hai to wo singleton nhi hota , uske mutiple instance bn jate hai

// singleton
// object.create



const mySym = Symbol("key1")


// object literals

// How to add symbols as a key for an object? well simply mysSym: "mykey1" likhne pe error to nhi dega 
// but typeof kroge to pata chlega thats not a symbol but a string
// so symbol ki tarah use krna hai to ek hi tarika hai [mySym]: "myekey1" , aise likho.
const JsUser = {
    name: "Gaurav",
    "Full Name": "Gaurav Choudhary",
    [mySym]: "myekey1",
    age: 18,
    location: "Delhi",
    email: "Gaurav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// behind the scenes keys as a string jarahi hai "name","age","location" etc.

//console.log(JsUser.email); 
// or
//console.log(JsUser["email"]);

// cant do like this console.log(JsUser.Full Name); thats why learnt second approach to access
/* console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);
 */
// to change value
JsUser.email = 'Gaurav@chatgpt.com'

//to lock an object so the object wont get changed
// Object.freeze(JsUser)

JsUser.email = "Gaurav@microsoft.com"
//console.log(JsUser);

// js mai functions ko variable ki tarah use krte hai

JsUser.greeting = function () {
    console.log("Hello JS Users");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this to refer to the same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// But this will return the reference of function and will not execute the function.
/* console.log(JsUser.greeting);
console.log(JsUser.greetingTwo); */




