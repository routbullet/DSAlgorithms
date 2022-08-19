// Reverse an Array

//method 1

// const reverseArr = (arr) => {
//     let rev = []
//     for(let i = arr.length-1; i>= 0; i--){
//         rev.push(arr[i]);
//     }
//     return rev;

// }

// arr = [1, 2, 3, 4, 5]


// console.log(reverseArr(arr)); //[ 5, 4, 3, 2, 1 ]


// -----------------------------------------------------

// method 2

const reverseArr = (arr) => {
    for(let i = 0; i < Math.floor(arr.length/2); i++){
      arr[i] = arr[i] ^ arr[arr.length-1-i]
      arr[arr.length-1-i] = arr[i] ^ arr[arr.length-1-i]
      arr[i] = arr[i] ^ arr[arr.length-1-i]
    }
    
    return arr;

}

arr = [1, 2, 3, 4, 5]

console.log(reverseArr(arr)); //[ 5, 4, 3, 2, 1 ]

