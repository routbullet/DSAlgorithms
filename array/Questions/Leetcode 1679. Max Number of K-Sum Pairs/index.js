/*
Leetcode 1679. Max Number of K-Sum Pairs


You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let count = 0;
  nums.sort((a, b) => a - b);
  // 1,3,3,3,4
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];

    if (sum === k) {
      i++;
      j--;
      count = count + 1;
    } else if (sum < k) {
      i++;
    } else if (sum > k) {
      j--;
    }
  }

  return count;
};

let nums = [1, 0, 3, -1, 4, 2],
  k = 3; // output : 3  , time complexity - 0(n), space complexity - 0(1)

console.log(maxOperations(nums, k));
