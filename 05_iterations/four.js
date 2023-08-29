const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for-in loops can iterate over objects as well.

/* for (const key in myObject) {
    console.log(key);
} */ // js
//cpp
//rb
//swift

// to get values
/* for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
} */ // js shortcut is for javascript
//cpp shortcut is for C++
//rb shortcut is for ruby
//swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]
// is case mai saari keys print hongi array ki , for-in loop ki speciality. for-of mai values aarahi thi,
/* for (const key in programming) {
    console.log(key);
}  */// 0
//1
//2
//3
//4
// so , Do not use for in over an Array if the index order is important.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important. In case of Arrays.




// to get values
/* for (const key in programming) {
    console.log(programming[key]);
} */ // js
//rb
//py
//java
//cpp

/* const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


for (const key in map) {
    console.log(key); // kuch print nhi hoga. map ko iterate nhi kr skte for-in loop se.
} */


