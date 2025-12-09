	//Number Type Checker
	
    // Create a function that takes a number as a parameter
    function getNumberType(num) {
      // Use conditional statements to check the number type
      if (num > 0) {
        return "Positive";
      } else if (num < 0) {
        return "Negative";
      } else {
        return "Neutral";
      }
    }

    // Declare and initialize the variable
    let value = -12;

    // Call the function and print the result for Negative number
    console.log("Input:" + value + "→ Type:" + getNumberType(value));

    // Call the function and print the result for Zero
    value = 0;
    console.log("Input:" + value + "→ Type:" + getNumberType(value));
	
	// Call the function and print the result for Positive number
    value = 37;
    console.log("Input:" + value + "→ Type:" + getNumberType(value));