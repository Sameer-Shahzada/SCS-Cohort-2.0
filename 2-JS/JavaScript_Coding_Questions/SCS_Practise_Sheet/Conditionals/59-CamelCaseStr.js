//-> 59. Convert a string to camelCase

/*
Example
    Input:  "John Doe"
    Output: "johnDoe"

More examples:

Input	                        Output
"Hello World"	            "helloWorld"
"java script"	            "javaScript"
"Front End Developer"	    "frontEndDeveloper"


Input:
"John Doe Smith"

↓

Split into words

["John", "Doe", "Smith"]

↓

First word

john

↓

Remaining words

Doe
Smith

↓

Join

johnDoeSmith
*/
function stringConverter(str) {
  if (typeof str !== "string") return "";

  let words = str.split(" ");

  let result = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return result;
}

console.log(stringConverter("John Doe"));
