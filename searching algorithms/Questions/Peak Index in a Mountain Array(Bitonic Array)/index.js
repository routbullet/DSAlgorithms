// By Binary Search
var peakIndexInMountainArray = function(arr) {
    let srt = 0, last = arr.length-1
    while(srt < last){
        let mid = Math.floor((srt+last)/2);
        if(arr[mid] < arr[mid + 1]){
            srt = mid + 1
        }
        else{
            last = mid
        }
        
    }
    return srt
    
};

let arr = [0,10,5,2,30,32,31]
console.log(peakIndexInMountainArray(arr));