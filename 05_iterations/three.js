// for of loop , to iterate over arrays , maps, strings . NodeLists but doesnt work for objects.

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

/* Maps: 
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys. */


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




// ************************** Misc about Maps **********************

/* 
Essential Map Methods:
new Map()  Creates a new Map
set()      Sets the value for a key in a Map
get()      Gets the value for a key in a Map
delete()   Removes a Map element specified by the key
has()      Returns true if a key exists in a Map
forEach()  Calls a function for each key/value pair in a Map
entries()  Returns an iterator with the [key, value] pairs in a Map

Property:
size       Returns the number of elements in a Map

 */


/* 
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.get("apples");    // Returns 500

fruits.delete("apples");

Differences between JavaScript Objects and Maps:
Object                                   Map
Not directly iterable                    Directly iterable
Do not have a size property              Have a size property
Keys must be Strings (or Symbols)        Keys can be any datatype
Keys are not well ordered                Keys are ordered by insertion
Have default keys                        Do not have default keys
*/