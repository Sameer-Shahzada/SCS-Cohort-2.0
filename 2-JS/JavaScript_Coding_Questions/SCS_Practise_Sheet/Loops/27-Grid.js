//-> 27. Print a 3×3 grid using nested loops.

function printGrid(start, end) {

    let num = 1;  // if ask for number grid
    // outer loop
    for(let i = start; i <= end; i++) { // rows
        let row = "";
        // inner loop 
        for(let j = start; j <= end; j++) { // cols
            // row += "* ";
            row += num + " ";
            num++;
        }
        console.log(row)
    } 
}
printGrid(1, 3);

/*
Complexity
Time:  O(n²)
Space: O(1)
*/
