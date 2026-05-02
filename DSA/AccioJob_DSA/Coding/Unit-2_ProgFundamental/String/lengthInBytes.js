/*
Length In Bytes
Instructions
Write a function called byteSize that takes a string as input and returns the size of the string in bytes. 
The function should work for both ASCII and non-ASCII characters.

Examples
Input	            Output
byteSize        ('hello world')	11
byteSize        ('안녕하세요')	15
byteSize        ('')	0

Acceptance Criteria
- When the byteSize function is called with a string input, it should return the size of the string in bytes.
- The function should work for both ASCII and non-ASCII characters.
- The function should handle empty string input and return a byte size of 0.
- Extra information in context with this problem:

About the Blob Concept:
In the context of this problem, a Blob object is used to determine the size of the input string in bytes. 
A Blob represents a file-like object of immutable, raw data, and it can be used to handle both ASCII and 
non-ASCII characters.

Here's how the Blob is used in this problem:

Creating a Blob Object: A new Blob object is created with the given string. 
This object represents the raw data of the string. 
Getting the Size: The size property of the Blob object returns the size of the string in bytes. 
This includes the correct handling of non-ASCII characters, which may require more bytes to represent.
This approach allows for an efficient calculation of the byte size of a string, including handling of 
different character encodings.

*/

/*
UTF-8 encoding rules:

| Range      | Bytes   |
| ---------- | ------- |
| 0–127      | 1 byte  |
| 128–2047   | 2 bytes |
| 2048–65535 | 3 bytes |
| >65535     | 4 bytes |

if (code <= 0x7F)       // 127
if (code <= 0x7FF)      // 2047
if (code <= 0xFFFF)     // 65535


*/

function byteSize(str) {
    let bytes = 0;

    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);  // It returns the Unicode (UTF-16) code of the character at that position.
        // console.log(code);          
                                        /* Example  
                                        "ABC".charCodeAt(0) → 65
                                        "ABC".charCodeAt(1) → 66 

                                            A → 65  
                                            B → 66  
                                            C → 67
                                            
                                        "안".charCodeAt(0) → 50504

                                        */


        if(code <= 0x7F) {
            bytes += 1;
        } else if(code <= 0x7FF) {
            bytes += 2;
        } else if(code <= 0x7FFF) {
            bytes += 3;
        } else {
            bytes += 4;
        }
    }
    return bytes;
}
console.log(byteSize('Sameer'))

