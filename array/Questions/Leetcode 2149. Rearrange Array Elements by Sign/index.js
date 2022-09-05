/*

Leetcode 2149. Rearrange Array Elements by Sign // Alternative positive-negative

You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.


Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]


*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let positive = [],
    negative = [],
    output = [];

  //positive = [9,4,5,0,2], neg = [-2,-1,-5,-3], output = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative.push(nums[i]);
    } else {
      positive.push(nums[i]);
    }
  }

  let p1 = 0,
    n1 = 0;
  for (let j = 0; j < positive.length; j++) {
    if (positive.length === 0) {
      return negative;
    }
    if (p1 < positive.length) {
      output.push(positive[j]);
      p1++;
    }
    if (n1 < negative.length) {
      output.push(negative[j]);
      n1++;
    }
  }

  return output;
};

let nums = [3, 1, -2, -5, 2, -4]; // Output: [3,-2,1,-5,2,-4]
console.log(rearrangeArray(nums));
