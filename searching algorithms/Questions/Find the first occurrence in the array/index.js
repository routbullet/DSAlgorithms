// Find the first occurrence in the sorted array

const firstOccurrence = (arr, key, size) => {
    let low = 0;
    let end = size-1;
    let result = -1;
    if(size == 0){
        return `There is a empty array.`
    }
    while(low <= end){
        let mid = Math.floor((low + end)/2);
        if(arr[mid] === key){
            result = mid
            end = mid-1
        }
        else if(arr[mid] > key){
            end = mid-1
        }
        else{
            low = mid+1
        }
    }
    return result;

    
}



let arr = [1, 3, 10, 19, 19, 19, 21 , 29]
size = arr.length

console.log(firstOccurrence(arr, 19, size));  