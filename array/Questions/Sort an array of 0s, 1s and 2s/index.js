// Sort an array of 0s, 1s and 2s
/*
Given an array of size N containing 
only 0s, 1s, and 2s; sort the array in ascending order.
*/


const sort012 = (arr) => {
    
    let low = 0, mid = 0, high = arr.length-1

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        }
        else if(arr[mid] === 2){
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            mid++
            high--
          
        }
        else{
            mid++
         
        }
        }
        
        return arr
    }


let arr = [0, 2, 1, 2, 0]
console.log(sort012(arr));