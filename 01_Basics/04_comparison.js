/* console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1); */

/* console.log("2" > 1); //true
console.log("02" > 1); //true
 */

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*  The reason is that an equality check == and comparisons > <>= <= work differently.
Comparisons convert null to a number , treating it as 0. 
Thats why (3) null>= 0 is true and (1) null > 0 is false.  */

/* In this comparison, the value of undefined is coerced into NaN (Not a Number) */
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false



// === , ab data type bhi check krega
console.log(2 === "2"); // false