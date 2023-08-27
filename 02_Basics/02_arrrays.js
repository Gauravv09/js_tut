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