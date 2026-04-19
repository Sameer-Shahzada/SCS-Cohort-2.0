/*

        *
      * *
    * * *
  * * * *
* * * * *

*/

/*
Approach:
- For each row i:
    spaces = n - i
    stars = i
- First print spaces for alignment
- Then print stars for pattern
------------------------------------------------------------------------------

2. APPROACH (this is what you asked for)
Step 1: Think row-wise (VERY IMPORTANT)

Ask:
For each row i, how many spaces and how many stars?

Build a table:
Row (i)	Spaces (n - i)	Stars (i)
1	            4	        1
2	            3	        2
3	            2	        3
4	            1	        4
5	            0	        5
✅ Final formulas:
Spaces = n - i
Stars = i

🎯 FINAL TAKEAWAY

Whenever you see a pattern:
👉 Immediately think:
        Row i → spaces? stars?
That’s it. No confusion ever again.

*/

function mirrorRightAngledTrianglePattern(n) {
    
    
    for(let i = 1; i <= n; i++) {
        // spaces → shift stars to right
        for(let j = 1; j <= n - i; j++) {

            process.stdout.write("  ");
        }
        // stars → actual pattern
        for(let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log()
    }

}
mirrorRightAngledTrianglePattern(5)