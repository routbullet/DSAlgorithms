/* Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

*/


var isPalindrome = function(x) {
    let rev = 0, num = x

    while(x !== 0){
        let lastDigit = x % 10
        rev = rev * 10 + lastDigit
        x = Math.floor(x/10)
    }

   return num === rev ? true : false
};

let x = 121
console.log(isPalindrome(x));
