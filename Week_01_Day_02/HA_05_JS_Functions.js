	// Functions & Callbacks Practice
	
	// Function Declaration
	
    // Create a function named `userProfile` that takes a `name` and logs a greeting.
    function userProfile(name) {
      console.log("Hello, " + name + "!");
    }

    // Call function named `userProfile`
    userProfile("Raghuraman"); // Expected: Hello, Raghuraman!


    // Arrow Function

    // Create an arrow function named `double` that returns twice the input value.
    const arrow = (double) => double * 2;

    // Call an arrow function named `arrow`
    const original = 21;
    console.log("double(" + original + ") = " + arrow(original)); // Expected: double(21) = 42


	// Anonymous Function + Delay

    // Use an anonymous function with setTimeout to log a delayed message after 2 seconds.
    setTimeout(function () {
      console.log("This message is delayed by 2 seconds");
    }, 2000);


    // Callback Function

    // Create a function `getUserData` that accepts a callback and simulates data fetch.
    function getUserData(callback) {
      console.log("Fetching user data...");
      setTimeout(() => {
        const user = { name: "Raghuraman", age: 40 }; // sample user object
        // Once "fetched", invoke the callback with the user object
        callback(user);
      }, 3000);
    }

    // Call a function `getUserData`, pass a callback to handle the fetched user data
    getUserData(function (user) {
      //console.log(`User fetched → Name: ${user.name}, Age: ${user.age}`);
      console.log("User fetched → Name: " + user.name + ", Age: " + user.age);
    });

    // Note:
    // You will see logs in this order:
    // 1) Hello, Raghuraman!
    // 2) double(21) = 42
    // 3) This message is delayed by 2 seconds (after ~2s)
    // 4) Fetching user data...
    // 5) User fetched → Name: Raghuraman, Age: 40 (after ~3s)