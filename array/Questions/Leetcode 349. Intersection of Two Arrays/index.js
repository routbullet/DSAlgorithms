/*

Leetcode 349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must be unique and 
you may return the result in any order.


Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]


*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let output = [],
    arr1Len = nums1.length,
    arr2Len = nums2.length;
  let p1 = 0,
    p2 = 0;

  while (p1 < arr1Len && p2 < arr2Len) {
    if (nums1[p1] === nums2[p2]) {
      output.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return [...new Set([...output])];
};

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2]; // Output : [2]
console.log(intersection(nums1, nums2));
