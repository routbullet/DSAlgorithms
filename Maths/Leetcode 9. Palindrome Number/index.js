/* Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

*/


var isPalindrome = function(x) {

    // for negative value output should be false
    if(x < 0 || (x !== 0 && x % 10 === 0)){
        return false
    }
    let num = x
    let rev = 0
    
    while(x !== 0){
        let lastDigit = x % 10
        rev = rev * 10 + lastDigit
        x = Math.floor(x/10)
    }
    //Constraints:  -2^31 <= x <= 2^31 - 1
   if(num <= Math.pow(-2, 31) || num >= Math.pow(2, 31)-1){
       return 0;
   }

   return num === rev ? true : false

};

// let x = 121      // true
// let x = -121     // false
// let x = 0        // true
console.log(isPalindrome(x));
