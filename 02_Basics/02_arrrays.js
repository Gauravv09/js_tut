const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

/* const allHeros = marvel_heros.concat(dc_heros) 
console.log(allHeros); */

const all_new_heros = [...marvel_heros, ...dc_heros] //better than concat , by using spread ... you can provide many arrays


 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //infinity is given for depth of array , so it will automatically take depth of array

console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "hitesh" })) // interesting kyuki isme array nhi ban payega , you have to specify ki kiska array banana hai keys ka ya values ka


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


//**********************Warning****************

/*  If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined */




/* const points = [40]; is not same as const points = new Array(40);
second one will This code creates a new array with a length of 40, but all the elements in the array will be initially empty (undefined).
and first in  one This code creates a new array with one element, which is the number 40. */









