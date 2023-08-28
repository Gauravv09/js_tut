/* if(true){
    let a = 10
    const b = 20
    var c = 30 
    
}

console.log(a); // wont work, a is not defined
console.log(b); // wont work, b is not defined
console.log(c); // 30  */





var c = 300
let a = 300
// ye hai global scope , if ke andar ke scope ko bolte block scope
// global scope mai  jo bhi likha hai wo value available hoti hai block scope ke andar but
// block scope ki value bahar nhi jani chahiye.
if(true){
    let a = 10
    const b = 20
    var c = 30 //var se declare kiya hua variable scope ke andar bahar life rkhta hai.
    console.log("INNER: ", a);
}


//console.log(a); // 300 
// Imp: jab browser se inspect se console ka jo  scope hai wo alag hai node ke code environment ke global scope se.
// chota baccha bade se icecream cheen skta hai , bada chote se nahi.
/* function one(){
    const username = "Gaurav"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website); error fekega , ReferenceError: website is not defined

    two()
}

one() // Gaurav */

function one(){
    const username = "Gaurav"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website); error fekega , ReferenceError: website is not defined

    
}

// one() // nothing printed , two execute hi nhi hoga , kyuki one mai two ko call nhi kra .

if(true){
    const username = "Gaurav"
    if(username === "Gaurav"){
        const website = "Youtube"
        console.log(username + website);
    }
   // console.log(website); // error fekega, website reference not defined
}

// console.log(username); error fekega, // ReferenceError: username is not defined 



// ****************** Interesting ******************
// function aise bhi bana skte hai
/* function addOne(num){
    return num + 1
}

addOne(5) // value kisi variable mai return nhi hui , so nothinf printed.
// function aise bhi bana skte hai
const addTwo = function(num){
    return num + 2
}
addTwo(5) // // value kisi variable mai return nhi hui , so nothinf printed. */

console.log(addone(5)); //6

function addone(num){
    return num + 1
}

//hoisting concept.
console.log(addTwo(5)); // But yaha error fekega,  Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
    
}




