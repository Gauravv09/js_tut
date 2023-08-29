// for of loop , to iterate over arrays , maps but doesnt work for objects.

/* for (const iterator of object) {
    
} */

const arr = [1, 2, 3, 4, 5]

// in for-of loop object se yaha mtlb kis chiz par loop lagana hai , ye sirf objects ke liye nahi hai.
// increment krne ki zarurat nahi isme , koi declaration nahi.
/* for (const num of arr) {
    console.log(num);
} */

/* const greetings = "Hare Krishna!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
} */

// Maps , objects having unique values

/* const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

 for (const key of map) {
    console.log(key);
}   */ // /* [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ] 

//interesting syntax
/* const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const [key, value] of map) {
    console.log(key, ':-', value);
}  */// IN :- India
// USA :- United States of America
// Fr :- France


// imp
/* const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);   
} // error fekega , TypeError: myObject is not iterable. */



