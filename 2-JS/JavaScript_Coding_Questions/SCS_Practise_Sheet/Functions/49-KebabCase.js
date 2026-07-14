//-> 49. Write a function that converts a string to kebab-case.


/*
1️⃣ What is kebab-case?

Kebab-case means:- Convert all letters to lowercase
Replace spaces with hyphens (-)

Examples
Input	                                   Output
"Hello World"	                        "hello-world"
"JavaScript Coding Questions"	    "javascript-coding-questions"
"Shinchan"	                            "shinchan"
*/
function kebab(str) {
   if(typeof str !== 'string') {
    return `Invalid String`;
   }

   return str.toLowerCase().replaceAll(" ", "-");

}
console.log(kebab('Hello World'))