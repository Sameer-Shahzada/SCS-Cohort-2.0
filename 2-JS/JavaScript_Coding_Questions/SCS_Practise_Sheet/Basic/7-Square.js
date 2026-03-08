// -> 7. Store a number and print its square.

function findSquare (num) {
    if(!Number.isInteger(num) || Number.isNaN(num)) {
        return 'Invalid Input';
    }


    //-> By JS Math utility
    const square = Math.pow(num, 2);
    console.log(square);

    //-> Without Math function
    // const sqr = num * num;
    //         OR
    // const sqr = num ** 2;
    // console.log(sqr)
}

findSquare(5)