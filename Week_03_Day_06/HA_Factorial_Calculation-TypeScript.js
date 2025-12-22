// factorial.ts
/**
 * Function to compute factorial of a non-negative integer using iteration.
 * @param n - non-negative integer
 * @returns factorial of n
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Example calls to demonstrate functionality
console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 1:", factorial(1)); // 1
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Factorial of 10:", factorial(10)); // 3628800
// Example with error
try {
    console.log("Factorial of -3:", factorial(-3));
}
catch (error) {
    console.error("Error:", error.message);
}
