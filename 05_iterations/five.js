// for-each loop , given as a method for arrays
const coding = ["js", "ruby", "java", "python", "cpp"]
// isme function name likhne ki zarurat nhi , kyuki yaha call back function dete hai. 
// kyuki ye function array ke andar chl raha hai to ye parameter ki tarah values lekar aayega () mai.
// {} isme jo krna hai us value ke saath , krlo.
/* coding.forEach( function (item) {
    console.log(item);
} ) */ // js
//ruby
//java
//python
//cpp

// arrow function bhi pass kr skte hai andar
/* coding.forEach( (item) => {
    console.log(item);
})  */// js
//ruby
//java
//python
//cpp


// even aise bhi kr skte ho ki function declare krdo alag se aur baad mai forEach mai bas uska reference pass krdo.
/* function printMe(item){
    console.log(item);
}  
coding.forEach(printMe)*/
// js
//ruby
//java
//python
//cpp

// forEach mai sirf item nhi blki index aur pura array bhi de skta hai

/* coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
}) */ // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

/* const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
] */
 // yaha item ka mtlb object se hai 
/* myCoding.forEach( (item) => {
    console.log(item.languageName);
} ) */ // JavaScript
//Java
//Python





