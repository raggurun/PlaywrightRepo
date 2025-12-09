	// Odd or Even Checker

    // Create a function named isOddOrEven
    function isOddOrEven(number) {
    // Check divisibility by 2
      if (number % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }

    // Declare and initialize the variable
    let num = 15;

    // Call the function and print the result
    console.log("The number" + num + "is:" + isOddOrEven(num));

    // Test with another number
    num = 28;
    console.log("The number" + num + "is:" + isOddOrEven(num));
