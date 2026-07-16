//-> 58. Given an array, remove all falsy values and return a new array containing only truthy values.

/*
Example
Input:
[0, 1, false, 2, "", 3, null, undefined, NaN]

Output:
[1, 2, 3]

2️⃣ What are Falsy Values in JavaScript?

There are 8 falsy values in JavaScript.

Value	    Type
false	    Boolean
0	        Number
-0	        Number
0n	        BigInt
""	        Empty String
null	    Object
undefined	Undefined
NaN	Number

Everything else is truthy.

Example 
Boolean(false);      // false
Boolean(0);          // false
Boolean("");         // false
Boolean(null);       // false

Boolean(5);          // true
Boolean("Sameer");   // true
Boolean([]);         // true
Boolean({});         // true

Interview Approach 1 (Loop)
Logic
1. Create a new array
2. Traverse original array
3. If element is truthy
      push into new array
4. Return new array

*/

function removeFalsyValues(arr) {

    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null])); // [1, 2, 3]

/* Dry Run 

4️⃣ Dry Run
Array:

[0,1,false,2,"",3]

↓

0       ❌
1       ✅
false   ❌
2       ✅
""      ❌
3       ✅

↓

Result

[1,2,3]
*/