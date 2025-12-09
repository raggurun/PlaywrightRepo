	// let variables + typeof (including an uninitialized variable)


    // a) String
    let firstName = "Raghuraman";

    // b) String
    let companyName = "Acme Corp";

    // c) Number
    let mobileNumber = 9876543210;

    // d) Boolean
    let isAutomation = true;

    // e) Uninitialized (undefined by default)
    let hasPlaywright;

    // Print values and their types
    console.log("firstName:" + firstName + " -> typeof:" + typeof firstName);         // "string"
    console.log("companyName:" + companyName + " -> typeof:" + typeof companyName);   // "string"
    console.log("mobileNumber:" + mobileNumber + " -> typeof:" + typeof mobileNumber); // "number"
    console.log("isAutomation:" + isAutomation + " -> typeof:" + typeof isAutomation); // "boolean"
    console.log("hasPlaywright:" + hasPlaywright + " -> typeof:" + typeof hasPlaywright); // "undefined"