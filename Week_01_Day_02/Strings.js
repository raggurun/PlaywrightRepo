        // Count occurrences of a character in a string

        let fullname = "raghuraman";
        let charToFind = "a";
        let count = 0;
        for (let i = 0; i < fullname.length; i++) {
            if (fullname[i] === charToFind) {   
                count++;
            }
        }
        console.log("Count of char " + charToFind + ": " + count);

        //reverse a string

        let str = "raghuraman";
        let reversedStr = "";
        for (let i = str.length; i >= 0; i--) {
            reversedStr += str.charAt(i);
        }
        console.log("Reversed String: " + reversedStr); 