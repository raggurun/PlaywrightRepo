	// Grade Evaluator (switch with true)
    // Create a function that takes a student's score as a parameter.
    // Use `switch` statement inside the function to assess score ranges.
    // Return the corresponding grade.
     
    function getGrade(score) {
      switch (true) {
        case score >= 90 && score <= 100:
          return "A";
        case score >= 80 && score < 90:
          return "B";
        case score >= 70 && score < 80:
          return "C";
        case score >= 60 && score < 70:
          return "D";
        case score >= 0 && score < 60:
          return "F";
        default:
          // Handles out-of-range values like <0 or >100
          return "Out of range";
      }
    }

    // Declare and initialize the variable.
    let studentScore = 85;

    // Call the function and print the result.
    console.log("Score:" + studentScore + "→ Grade:" + getGrade(studentScore));

    // Bonus tests (optional)
    console.log("Score: 97 → Grade:" + getGrade(97));   // A
    console.log("Score: 73 → Grade:" + getGrade(73));   // C
    console.log("Score: 61 → Grade:" + getGrade(61));   // D
    console.log("Score: 45 → Grade:" + getGrade(45));   // F
    console.log("Score: -5 → Grade:" + getGrade(-5));   // Out of range
    console.log("Score: 105 → Grade:" + getGrade(105)); // Out of range
    console.log("Score: '90' → Grade:" + getGrade("90")); // Invalid score