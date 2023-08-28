// array are resizeable in js

const myArr = [0, 1, 2, 3, 4, 5] // method 1 to create array
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // method 2 to create array
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr); //by splice the array gets manipulated but not in slice


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//*************some more****************

/* 
The typeof operator returns object when used on some array literal ,
 because a JavaScript array is an object.
 To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray(arrayName):
 
or do like this: 
The instanceof operator returns true if an object is created by a given constructor:
const fruits = ["Banana", "Orange", "Apple"];

console.log(fruits instanceof Array);

*/


/* 
Properties of js:
The length property returns the length (size) of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

The JavaScript method toString() converts an array to a string of (comma separated) array values:
fruits.toString();

The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); //Banana*Orange*Apple*Mango

The pop() method removes the last element from an array:
fruits.pop();

The push() method adds a new element to an array (at the end):
fruits.push("Kiwi");

The shift() method removes the first array element and "shifts" all other elements to a lower index:
fruits.shift() //The shift() method returns the value that was "shifted out":
console.log(fruits); //[ 'Orange', 'Apple', 'Mango' ]

The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon");



Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.
delete fruits[0]
console.log(fruits[0]); // undefined

The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); // The concat() method does not change the existing arrays. It always returns a new array.
console.log(myChildren); //Cecilie,Lone,Emil,Tobias,Linus 

Merging Three Arrays:
const myChildren = arr1.concat(arr2, arr3);

Merging an Array with Values:
const myChildren = arr1.concat("Peter");



The flat() method creates a new array with sub-array elements concatenated to a specified depth:
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);



The splice() method can be used to add new items to an array:
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");


The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
console.log(removed); // [ 'Apple', 'Mango' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);


The slice() method slices out a piece of an array into a new array:
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); 
console.log(fruits); //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(citrus); //[ 'Orange', 'Lemon', 'Apple', 'Mango' ]



Note
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.

The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to (but not including) the end argument.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // [ 'Orange', 'Lemon' ]



NOTE:
All JavaScript objects have a toString() method.

The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]


The reverse() method reverses the elements in an array.
fruits.reverse()
You can use it to sort an array in descending order:
// First sort the array
fruits.sort();
// Then reverse it:
fruits.reverse();


Numeric Sort
By default, the sort() function sorts values as strings.
You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]



The Compare Function:
function(a, b){return a - b} // The compare function should return a negative, zero, or positive value, depending on the arguments.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
Example:
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.


The above example, array.sort(), is not accurate. It will favor some numbers over the others.
The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!




*/
