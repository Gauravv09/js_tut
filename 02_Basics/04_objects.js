// singleton object
//const tinderUser = new Object()
// non-singleton object
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gaurav",
            lastname: "Choudhary"
        }
    }
}

/* console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname); */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is optional parameter so that aur bhi objs ko pass kr sake assign function mai
// assign(target , other all source) so { target} and obj1 obj2 obj4 will act as sources , target mai changes hojayenge
//console.log(obj3);

//or by spreading

/* const obj3 = {...obj1, ...obj2}
console.log(obj3);
 */

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // will be an array of keys
console.log(Object.values(tinderUser)); // will be an array of values
console.log(Object.entries(tinderUser)); // array ke andar har ek key value pair ka array

// to check whether object is having a particular property or not
console.log(tinderUser.hasOwnProperty('isLogged')); //false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

// Object de structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Gaurav"
}

// course.courseInstructor ki jagah ye bhi kr skte ho :
/* const {courseInstructor} = course
console.log(courseInstructor); */
// you can even change the keys name according to your convienencie and still do same thing.
const {courseInstructor: instructor} = course
console.log(instructor);

/* 
A JSON object contains zero, one, or more key-value pairs, also called properties. The object is surrounded by curly braces {}.
{
    name: "Gaurav",
    "coursename": "js in hindi",
    "price": "free"
}


*/

// kai baar apis object ki format ki jagah array ki format mai bhi milti hai jisme kai saare objects ho

/* 
[
    {},
    {},
    {}
]


*/


// randomsuerme most general api , json formatter