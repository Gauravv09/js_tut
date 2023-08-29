// for
// If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. 
/* for (let index = 0; index <= 10; index++) {
    const element = index
    console.log(element);
    
} */

// console.log(element); // element not declared in this scope


/* for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(" 5 is best number");
    }
    console.log(element);
    
} */

// andar ke for loop mai i mat lo , same scope mai hai
/* for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`); //second for mai i ka access hai kyuki scope ke andar h
    }
} */


/* for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
    }
} */



/* 
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    console.log(element);
}
 */

// break and continue


/* for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        break       // kisi bhi control flow ko break krna ho , control bahar chala jayega.
    }
    console.log(`value of i is ${i}`);
} */


/* for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue // ek condition skip krdega.
    }
    console.log(`value of i is ${i}`); // isliye ye line execute nahi hua.
} */














