// Dates

// new Date() creates a date object with the current date and time:
let myDate = new Date()
/* 
console.log(myDate) // 2023-08-29T05:42:42.478Z
console.log(myDate.toString()); // Tue Aug 29 2023 11:16:16 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Aug 29 2023
console.log(myDate.toLocaleString()); // 29/8/2023, 11:17:31 am
console.log(typeof myDate);  // object
*/

/* 
There are 9 ways to create a new date object:
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/





/* 
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toString()); //Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toString()); // Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString());  // 23/1/2023, 5:03:00 am 

JavaScript Short Dates.
Short dates are written with an "MM/DD/YYYY" syntax like this:
 const d = new Date("03/25/2015");
 console.log(d.toString()); // Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time)

JavaScript Long Dates.
Long dates are most often written with a "MMM DD YYYY" syntax like this:
const d = new Date("Mar 25 2015"); // Month and day can be in any order:
 console.log(d.toString()); // Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time)


*/

/* let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 5:30:00 am
 */

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

/* console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); */
console.log(Math.floor(Date.now()/1000)); // ms to s


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // Note: JavaScript counts months from 0 to 11.
// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:



// `${newDate.getDay()} and the time `

newDate.toLocaleString('default' , {
    weekday: "long",
    
})

// ********************* Misc ********************* 

/* // JavaScript stores dates as number of milliseconds since January 01, 1970.
const d = new Date(100000000000);
console.log(d.toString()); // Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)
 */

/* Previous Century
One and two digit years will be interpreted as 19xx:
 const d = new Date(99, 11, 24);
 console.log(d.toString()); // Fri Dec 24 1999 00:00:00 GMT+0530 (India Standard Time)

 const d = new Date(-100000000000);
 console.log(d.toString()); // Mon Oct 31 1966 19:43:20 GMT+0530 (India Standard Time)
*/



/* 
WARNINGS !
In some browsers, months or days with no leading zeroes may produce an error:
The behavior of "YYYY/MM/DD" is undefined.
Some browsers will try to guess the format. Some will return NaN.
The behavior of  "DD-MM-YYYY" is also undefined.
Some browsers will try to guess the format. Some will return NaN.
*/



/* 
Date Methods:

Parsing Dates:
If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let msec = Date.parse("March 21, 2012");
console.log(msec); // 1332268200000

The toDateString() method converts a date to a more readable format:
const d = new Date();
console.log(d.toDateString()); // Tue Aug 29 2023

The toUTCString() method converts a date to a string using the UTC standard:
const d = new Date();
d.toUTCString(); // Tue, 29 Aug 2023 06:19:48 GMT

The toISOString() method converts a date to a string using the ISO standard:
const d = new Date();
console.log(d.toISOString()); // 2023-08-29T06:20:39.407Z

*/

/* 
Date Get Methods:
The get methods return information from existing date objects.
getFullYear()    
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime()

Date.now() is a static method of the Date object.
You cannot use it on a date object like myDate.now().

Warning: getYear() is deprecated. Do not use it!
Note: In JavaScript, the first day of the week (day 0) is Sunday.

The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
const d = new Date();
let diff = d.getTimezoneOffset();
console.log(diff); // -330

*/


/* 
Set Date Methods
Set Date methods are used for setting a part of a date:

const d = new Date();
d.setFullYear(2020);
console.log(d.toString());

setDate()
setFullYear()
setHours()
setMilliseconds()
setMinutes()
setMonth()
setSeconds()
setTime()

*/




