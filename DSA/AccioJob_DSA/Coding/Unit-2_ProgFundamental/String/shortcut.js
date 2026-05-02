/* 
Shortcut Function

Instructions
Write a function shortcut that takes two strings and returns the initial letters of these strings. 
If either of the input strings is empty, return an empty string.

Examples
Input	                                        Output
shortcut("Amnesty", "International")	         'AI'
shortcut("Hello", "world")	                     'Hw'
shortcut("", "International")	                  ''
shortcut("Amnesty", "")	                          ''

Acceptance Criteria
The function should return a string.
If both input strings have at least one character, the function should return the initial letters of these strings.
The function should handle upper- and lowercase characters correctly.

Constraints
The input strings contain only alphabetical characters (A-Z and a-z).
The length of the input strings is at most 100 characters.

*/

function shortcut(s1, s2) {

    if(s1.length === 0 || s2.length === 0) {
        return '';
    }
    return s1[0] + s2[0];
}
console.log(shortcut('Hello', ''))