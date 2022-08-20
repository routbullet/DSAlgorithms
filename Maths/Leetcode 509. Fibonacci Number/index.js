//509. Fibonacci Number

/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

*/


/**
 * @param {number} n
 * @return {number}
 */
 const fiboHelper = (n) => {
    if(n === 0){
        return 0
    }
    if(n === 1) {
        return 1
    }
    let partialAns = fiboHelper(n-1) 
    let partialAns2 = fiboHelper(n-2)
    return partialAns + partialAns2
}

var fib = function(n) {
    return fiboHelper(n);
};

let n = 8 //3
console.log(fib(n))