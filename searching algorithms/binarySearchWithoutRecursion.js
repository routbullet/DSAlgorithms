const BinarySearch = (arr, key, size) => {
    let low = 0;
    let end = size-1;
    if(size == 0){
        return `There is a empty array.`
    }
    while(low <= end){
        let mid = Math.floor((low + end)/2);
        if(arr[mid] === key){
            return `The value is found : ${key} and the idex of the element is ${mid}.`
        }
        else if(arr[mid] > key){
            end = mid-1
        }
        else{
            low = mid+1
        }
    }

    
}


console.log(BinarySearch([1, 3, 10, 17, 18, 30, 35, 44], 30, 8));  