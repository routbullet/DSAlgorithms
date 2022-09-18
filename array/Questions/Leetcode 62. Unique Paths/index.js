/*
Leetcode 62. Unique Paths
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 10^9.  

Input: m = 3, n = 7
Output: 28

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from(Array(m), () => new Array(n));

  //for row
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = 1;
  }

  // for column
  for (let j = 0; j < dp.length; j++) {
    dp[j][0] = 1;
  }

  //operation
  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }
  }

  return dp[m - 1][n - 1];
};

let m = 3,
  n = 7; //Output: 28

console.log(uniquePaths(m, n));
