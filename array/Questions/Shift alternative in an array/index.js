// Shift alternative in an array


const shiftAlternative = (arr) => {
    let len = arr.length
    for(let i = 0; i< len; i+=2){
        if(i+1   < len){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        }
    }
    return arr

}

let arr = [1, 2, 3, 4, 5, 6]
// output => [ 2, 1, 4, 3, 6, 5 ]

console.log(shiftAlternative(arr))