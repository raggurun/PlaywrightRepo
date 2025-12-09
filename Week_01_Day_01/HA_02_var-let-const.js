	//*******Using var:*******
	
	// Global variable
    const browserVersion = "Chrome";

    // Function
    function getBrowserVersion() {
    // Check condition -> undefined === chrome -> failed. so, if condition won't execute
      if (browserVersion === "Chrome") {
    // Local variable using 'var' (block declared but function-scoped)
        var browserVersion = "Chrome 130";
        console.log("[inside if] browserVersion = " + browserVersion);
      }
      // Prints "undefined"
      console.log("[outside block] browserVersion = " + browserVersion);
    }

    // Call function
    getBrowserVersion();

    // Show the global is unaffected
    console.log("[global] browserVersion = " + browserVersion);

	 //*******Using let:*******
	
	// Global variable
    const browserVersion = "Chrome";

    // Function
    function getBrowserVersion() {
    // Check condition
      if (browserVersion === "Chrome") {
        // 5) Local variable using 'let' (block-scoped)
        let browserVersion = "Chrome 130"; // shadows only within the 'if' block
        console.log("[inside if] browserVersion = " + browserVersion);
      }
    // Outside the 'if' block, the 'let' variable is out of scope; we see the global
      console.log("[outside block] browserVersion = " + browserVersion);
    }

    // Call function
    getBrowserVersion();

    // Show the global is unaffected
    console.log("[global] browserVersion = " + browserVersion); 

	 //*******Using const:*******
	
	// Global variable
    const browserVersion = "Chrome";

    // Function
    function getBrowserVersion() {
    // Check condition
      if (browserVersion === "Chrome") {
        // 5) Local variable using 'let' (block-scoped)
        const browserVersion = "Chrome 130"; // shadows only within the 'if' block
        console.log("[inside if] browserVersion = " + browserVersion);
      }
    // Outside the 'if' block, the 'const' variable is out of scope; we see the global
      console.log("[outside block] browserVersion = " + browserVersion);
    }

    // Call function
    getBrowserVersion();

    // Show the global is unaffected
    console.log("[global] browserVersion = " + browserVersion); 
