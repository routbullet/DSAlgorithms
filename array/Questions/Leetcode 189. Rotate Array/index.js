/*

Leetcode 189. Rotate Array

Given an array, rotate the array to the right by k steps,
where k is non-negative.

*/


const rotateArray = (nums, k) => {
    let rotation = [], len = nums.length

    for(let i = 0; i<len; i++){
        rotation[(i+k) % len] = nums[i]
    }    

    for(let j = 0; j < len; j++){
        nums[j] = rotation[j]
    }

    // nums = rotation.slice(0, len);
    // nums = [...rotation]

    return nums
}

let nums = [1,2,3,4,5,6,7], k = 3 

console.log(rotateArray(nums, k))

/*

Output :
[
  5, 6, 7, 1,
  2, 3, 4
]

*/