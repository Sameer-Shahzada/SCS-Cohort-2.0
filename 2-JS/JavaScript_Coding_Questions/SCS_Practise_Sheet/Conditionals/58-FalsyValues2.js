// Best JavaScript Solution (Interview Favourite)

// Using filter():

function removeFalsyValues(arr) {

    if (!Array.isArray(arr)) return [];

    return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null]));

/*

Why does this work?

filter() expects a callback that returns true to keep an element and false to remove it.

Passing Boolean means it effectively does:

Boolean(element)

Examples:

Boolean(0)        // false
Boolean(5)        // true
Boolean("")       // false
Boolean("Hi")     // true

So all falsy values are removed automatically.

6️⃣ Another Version
return arr.filter(item => item);

This is equivalent to:

return arr.filter(Boolean);

But filter(Boolean) is shorter and widely recognized by experienced JavaScript developers.

7️⃣ Complexity
Complexity	Value
Time	O(n)
Space

*/