//-> 91. Write a program to Format date as DD/MM/YYYY. in javascript

/*
Convert a date into this format:
DD/MM/YYYY

Example
Input:  new Date()
Output: "16/04/2026"

*/

function formatDate(date) {

    // validation 
    if (!(date instanceof Date)) {
        return "Invalid Date";
    }

    //-> basic solution without leading zeros
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();

    // return day + "/" + month + "/" + year;

    // leading zeros
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

console.log(formatDate(new Date()));