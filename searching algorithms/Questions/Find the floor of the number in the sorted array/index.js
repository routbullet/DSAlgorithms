// Find the floor of the number

// Floor === A number which is less than or equal to the Target number or Key. 

const floorNumber = (arr, target) => {
    let srt = 0, end = arr.length -1
    while(srt <= end){
        let mid = Math.floor((srt+end)/2)
        if(target < arr[mid]){
            end = mid -1
        }
        else if(target > arr[mid]){
            srt = mid + 1
        }
        else{
            return mid
        }
    }
    return end

}

let arr = [1,3,5,6,9]
console.log(floorNumber(arr, 7)); //3
console.log(floorNumber(arr, 9)); //4