
function rightAngledTriangle(n) {
    // validation 
    if(!Number.isInteger(n)) {
        return `Invalid Input`;
    }
    
    // outer loop
    for(let i = 1; i <= n; i++) {
        // stars 
        let ascii = 65 + (i - 1); 
        for(let j = 1; j <= i; j++) {

            let charCode = 65 + ((ascii - 65) % 26) // to wrap [A - Z]
            process.stdout.write(String.fromCharCode(charCode));
            ascii++;
        }
        
        // spaces | no-need
        console.log()        
        
    }
}
rightAngledTriangle(24)