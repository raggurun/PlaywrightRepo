// Assessment: Find pairs of indices whose elements sum to target

const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

// Function to find pairs of indices where nums[i] + nums[j] = target
function findPairs(arr, target) {
  let results = []; // Step 1: Initialize empty array

  // Step 2: Use nested loops
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Step 3: Check if sum equals target
      if (arr[i] + arr[j] === target) {
        // Step 4: Add indices to results
        results.push([i, j]);
      }
    }
  }

  // Step 5: Return results
  return results;
}

// Example usage
const pairs = findPairs(nums, target);
console.log("Pairs of indices:", pairs);

// Expected output: [[2, 4], [1, 5]]
