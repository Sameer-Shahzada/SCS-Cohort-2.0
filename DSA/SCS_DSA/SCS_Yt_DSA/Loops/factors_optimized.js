// Write a program to find the all factors of given number efficiently.

/*
    Interview-Preferred Optimization: √n

Remember the factor-pair idea:

For 36:

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6

Once we reach:

√36 = 6

the pairs start reversing:

9 × 4
12 × 3
18 × 2
36 × 1

We've already discovered those factors.
Therefore, we only need to check up to: √n

This gives us: O(√n)
instead of: O(n)

*/

function findFactors(num) {
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            console.log(i);

            // Print the paired factor
            if (i !== num / i) {
                console.log(num / i);
            }
        }
    }
}

findFactors(12);

/*
Output:

1
12
2
6
3
4

The order is different from the brute-force approach, but all factors are found.

Note -> Dry run also available on ChatGPT 
Project - SCS Cohort 2.0 -> SCS YT DSA
*/