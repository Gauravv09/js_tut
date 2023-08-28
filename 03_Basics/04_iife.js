// Immediately Invoked Function Expressions (IIFE)
// IIFE Can be names or unamed.
// Jaise hi function likhe , turant hi excute krwana ho + Global scope ki pollution rokne ke liye.

(function chai(){
    console.log(`DB CONNECTED`);
})() 

// First() was for function defn and second() was for execution.

// can also write iife as arrow function:
/* (
    () => {
        console.log(`DB CONNECTED TWO`);
    }
)() // But this gives error

(function chai() {
        console.log(`DB CONNECTED TWO`);
    }
)() // But this also gives error , because iife invoke to hogya but usko pata nhi hai context rokna kaha hai. so add;. */

/*  (
    () => {
        console.log(`DB CONNECTED TWO`);
    }
)();  // DB CONNECTED TWO

(function chai2(){
        console.log(`DB CONNECTED TWO`);
})(); // DB CONNECTED TWO */

(
    (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    }
)("Gaurav"); // DB CONNECTED TWO Gaurav




