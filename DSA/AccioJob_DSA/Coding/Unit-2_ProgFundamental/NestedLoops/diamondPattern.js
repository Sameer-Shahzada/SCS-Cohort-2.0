function printDiamond(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {

    // Spaces
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }

    // Stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("*");
    }

    // Move to next line
    process.stdout.write("\n");
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {

    // Spaces
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }

    // Stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("*");
    }

    // Move to next line
    process.stdout.write("\n");
  }
}

// Call function
printDiamond(5);