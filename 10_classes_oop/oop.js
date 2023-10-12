const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true) 
const userTwo = new User("ChaiAurCode", 11, false)
// new(constructor function) use nhi krte to userTwo value overwirte krta userOne ke liye bhi.
// using new keyword a new empty object ( also called instance) is created.
console.log(userOne.constructor); // [Function: User], reference to itself 
//console.log(userTwo);