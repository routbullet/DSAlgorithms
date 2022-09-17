/*

Leetcode 136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};

let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
