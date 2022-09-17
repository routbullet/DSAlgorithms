/*
Leetcode 287. Find the Duplicate Number.

Given an array of integers nums containing n + 1 integers 
where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, 
return this repeated number.

You must solve the problem without modifying 
the array nums and uses only constant extra space.

Input: nums = [1,3,4,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]);
    if (nums[index] < 0) {
      return index;
    }

    nums[index] = -nums[index];
  }

  return -1;
};

let nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));
