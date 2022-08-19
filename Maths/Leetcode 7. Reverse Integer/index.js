// Reverse the number


// const reverse = (num) =>{

//     let rev = 0
//     while(num !== 0){
//         console.log("initial num =>", num)
//         let lastDigit = num % 10
//         console.log("lastdigit =>",lastDigit)
//         rev = rev * 10 + lastDigit
//         console.log("rev =>",rev)
//         num = Math.floor(num/10);
//         console.log("end num =>", num)
//     }

//     return rev;
// }


// let num = 12345

// console.log(reverse(num));


/* LeetCode: 7. Reverse 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

const reverse = (num) =>{

    // edge case: if number is negative
    let isNeg = false
    if(num < 0){
        isNeg = true
        num = -num
    }

    let rev = 0
    while(num !== 0){
        // console.log("initial num =>", num)
        let lastDigit = num % 10
        // console.log("lastdigit =>",lastDigit)
        rev = rev * 10 + lastDigit
        // console.log("rev =>",rev)
        num = Math.floor(num/10);
        // console.log("end num =>", num)
    }

    // edge case: if the number is within the Integer scope or Range

    if(rev <= Math.pow(-2, 31) || rev >= Math.pow(2,31)-1){
        return 0;
    }

    return isNeg ? - rev : rev;
}


let num = -12345

console.log(reverse(num));