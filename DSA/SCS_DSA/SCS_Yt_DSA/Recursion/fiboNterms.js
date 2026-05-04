function fiboNterms(n, first, second) {
    if(n == 0) return
    let third = first + second;
    process.stdout.write(third + " ");
    fiboNterms(n - 1, second, third)
}
let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fiboNterms(n-2, 0, 1)