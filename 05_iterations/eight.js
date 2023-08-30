// reduce() method returns a single value: the function's accumulated result.
// reudce() method does not change the original array.
const myNums = [1, 2, 3]
// acc => accumulator , {} ke baad , lagake initial value deni hoti hai for accumulator
/* const myTotal = myNums.reduce(function (acc, currval) {
    return acc + currval
}, 0)

console.log(myTotal); */ // 6

// lets see what is getting stored in acc and currval each time
/* const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 3)

console.log(myTotal); */ // acc: 3 and currval: 1
//acc: 4 and currval: 2
//acc: 6 and currval: 3
//9

// arrow function bhi le skte hai reduce method mai

/* const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal); */ // 6

// forEach , filter , map , reduce sab callback functions lete hai.


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]
// to get bill using reduce method.
/* const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay); */ // 22996
