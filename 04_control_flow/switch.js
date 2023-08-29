// jab ek hi value ko multiple conditions ke saath check krna ho -> switch case.
// preferred switch when there are a lot of if-else conditions.


/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

/* const month = 3

// By default jis case mai bhi key match hojata hai, uske baad ka saara code execute hojata hai except default.
// so use break statement after every case.

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default case match");
        break;
} */

month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;

    default:
        console.log("default case match");
        break;
}




