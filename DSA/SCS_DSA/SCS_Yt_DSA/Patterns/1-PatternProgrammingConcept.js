/* 

Pattern Programming Concept (Important)

Almost every pattern problem follows this structure:

Rows → outer loop
Columns → inner loop
Print logic → inside inner loop

General template:

for (rows) {
    for (columns) {
        print something
    }
    move to next line
}

Understanding this template makes 90% of pattern problems easy.


-> Interview Do's and Don'ts

✅ DO
✔ Use nested loops clearly
✔ Keep print logic simple
✔ Maintain consistent spacing
✔ Write readable variable names

Example:
rows
cols
i
j

❌ DON'T

❌ Avoid complicated conditions inside loops
❌ Avoid hardcoding numbers
❌ Avoid unnecessary variables

Bad example:

for(let i=0;i<4;i++)

Better:
for(let i=0;i<rows;i++)

6️⃣ Real Interview Tip (Very Important)

Interviewers rarely ask square pattern directly.
Instead they test logic transformation like:

*
**
***
****

or

****
***
**
*

or

1
12
123
1234

All of them depend on controlling the inner loop.

7️⃣ Pattern Mastery Roadmap (Recommended)

Since you want mastery, follow this order:

Level 1 — Basic Patterns
Square
Rectangle
Left Triangle
Right Triangle
Level 2 — Number Patterns
123
1234
111
222
Level 3 — Inverted Patterns
****
***
**
*
Level 4 — Pyramid Patterns
   *
  ***
 *****
Level 5 — Advanced Patterns
Diamond
Butterfly
Pascal Triangle
Hollow Patterns
8️⃣ Small Challenge for You (Next Step)

Try this pattern:

*
**
***
****

Write the function:

function trianglePattern(n)

Expected output for n = 4:

*
**
***
****


*/


