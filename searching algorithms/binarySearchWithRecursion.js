const BinarySearch = (arr, key, low, end) => {  
    while( low <= end){
        let mid = Math.floor((low + end)/2);
        if(arr[mid] === key){
            return `The value is found : ${key} and the idex of the element is ${mid}.`
        }
        else if(arr[mid] > key){
            end = mid-1;
            BinarySearch(arr, key, low, end);
        }
        else{
            low = mid+1;
            BinarySearch(arr, key, low, end);
        }
    }

    
}
let arr = [1, 3, 10, 17, 18, 30, 35, 44]
let low = 0;
let end = arr.length-1;

console.log(BinarySearch(arr, 18, low, end));  