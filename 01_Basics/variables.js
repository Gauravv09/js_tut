const accountID=14453
let accountEmail = "Gaurav@gmail.com"
var accountPassword = "123456"
accountCity = "Delhi" //variable is tarah bhi declare kiya ja skta hai

//accountID = 2 not allowed
let accountState; //unintialised variable ko js undefined lelega


accountEmail = "Gary@gmail.com"
accountPassword = "654321"
console.log(accountID);
console.table([accountEmail,accountID,accountPassword,accountCity,accountState])

/*
Prefer not to use var because of issue in block scope and fucntional scope
*/


"use strict"; //treat all JS code as newer version

alert(3 + 3)