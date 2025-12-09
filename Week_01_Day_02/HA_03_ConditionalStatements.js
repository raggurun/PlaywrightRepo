	// Launch Browser & Run Tests
	
	// launchBrowser: takes browserName (string), uses if-else, no return, prints message
     
    function launchBrowser(browserName) {
      // normalize the input to be case-insensitive
      const name = String(browserName).trim().toLowerCase();

      if (name === "chrome") {
        console.log("Launching Chrome browser...");
      } else {
        console.log(`Launching ${browserName} (default handling)...`);
      }
    }

    
     // runTests: takes testType (string), uses switch, no return, prints message
	 
     // Supported: smoke, sanity, regression; default -> smoke
     
    function runTests(testType) {
	// normalize the input to be case-insensitive
      const type = String(testType).trim().toLowerCase();

      switch (type) {
        case "smoke":
          console.log("Running smoke tests...");
          break;
        case "sanity":
          console.log("Running sanity tests...");
          break;
        case "regression":
          console.log("Running regression tests...");
          break;
        default:
          console.log("Unknown test type. Defaulting to smoke tests...");
          console.log("Running smoke tests...");
          break;
      }
    }

    // Calls from JavaScript 
    // launchBrowser
    launchBrowser("chrome");     // expected: Launching Chrome browser...
    launchBrowser("Firefox");    // expected: Launching Firefox (default handling)...

    // runTests
    runTests("smoke");           // expected: Running smoke tests...
    runTests("sanity");          // expected: Running sanity tests...
    runTests("regression");      // expected: Running regression tests...
    runTests("Performance");     // expected: Defaulting -> Running smoke tests...
