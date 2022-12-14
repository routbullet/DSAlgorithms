// Find the ceiling of the number
// Ceiling == A number which is equal or greater than Target number or a Key. 

const ceiling = (arr, target) => {
    let srt = 0;
    let end = arr.length -1

    while(srt <= end){
        if(target > arr[arr.length -1]){
            return -1
        }
        // let mid = srt + (end - srt)/2;
        let mid = Math.floor((srt+end)/2);
        if(arr[mid] > target){
            end = mid -1
        }
        else if(target > arr[mid]){
            srt = mid + 1
        }
        else{
            return mid
        }
    }
    return srt  //when the while loop break : srt will be mid + 1.
}


let arr = [1,3,5,6,9]

console.log(ceiling(arr,6)); //3
console.log(ceiling(arr,7)); //4
console.log(ceiling(arr,11)); //-1   if the target number is greater than greatest number -> return will be -1 or not present in the array. 
