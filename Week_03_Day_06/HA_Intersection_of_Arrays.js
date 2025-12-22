// Assessment: Compute intersection of two arrays without duplicates

// Function to compute intersection of two arrays
function intersection(arr1, arr2) {
  let result = [];

  // Step 3: Loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];

    // Check if element is in arr2 and not already in result
    if (arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

// Example calls to demonstrate functionality

// Typical case
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
console.log("Intersection of arrA and arrB:", intersection(arrA, arrB));
// Expected output: [3, 4]

// No common elements
const arrC = [7, 8, 9];
const arrD = [10, 11, 12];
console.log("Intersection of arrC and arrD:", intersection(arrC, arrD));
// Expected output: []

// All elements common
const arrE = [1, 2, 3];
const arrF = [1, 2, 3];
console.log("Intersection of arrE and arrF:", intersection(arrE, arrF));
// Expected output: [1, 2, 3]

// Case with duplicates in input arrays
const arrG = [2, 2, 3, 4, 4];
const arrH = [2, 4, 4, 5];
console.log("Intersection of arrG and arrH:", intersection(arrG, arrH));
// Expected output: [2, 4]
