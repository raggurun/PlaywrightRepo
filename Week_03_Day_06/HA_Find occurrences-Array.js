// Assessment: Find the number of occurrences

// Given array
const nums = [2, 4, 5, 2, 1, 2];

// Value to check
const k = 2;


function countOccurrences(arr, target) {
  let count = 0; // Step 1: Initialize count to 0

  // Step 2: Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Step 3: If element equals target, increment count
    if (arr[i] === target) {
      count++;
    }
  }

  // Step 4: Return the count
  return count;
}

// Example usage
console.log(`Number of occurrences of ${k}:`, countOccurrences(nums, k)); 
// Expected output: Number of occurrences of 2: 3
