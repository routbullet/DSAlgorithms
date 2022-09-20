/*
Leetcode 50. Pow(x, n)
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Input: x = 2.00000, n = 10
Output: 1024.00000
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1; // base case
  else if (n == 1) return x; // base case
  else if (n == -1) return 1 / x;
  else if (n % 2 == 0) {
    let t = myPow(x, n / 2);
    return t * t;
  } else if (n % 2 != 0) {
    return x * myPow(x, n - 1);
  }
};

let x = 2.0,
  n = 10;

console.log(myPow(x, n));
