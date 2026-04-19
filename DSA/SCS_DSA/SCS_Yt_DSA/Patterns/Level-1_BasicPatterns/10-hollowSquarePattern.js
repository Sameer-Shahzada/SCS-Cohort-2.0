//-> Write a program to print hollow square pattern

/*

* * * * *
*       *
*       *
*       *
* * * * *

✔ Top row → full stars
✔ Bottom row → full stars
✔ First & last column → stars
✔ Inside → spaces

*/

function hollowSquarePattern (n) {
    // validation 
    if(!Number.isInteger(n)) {
        return `Invalid Input`;
    }
    
    for(let i = 1; i <= n; i++) {
        // inner loop 
        for(let j = 1; j <= n; j++) {
           if (i == 1 || i == n || j == 1 || j == n) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  ") // 2-spaces needed
            }
        }
        console.log()
    }
}
hollowSquarePattern(5)