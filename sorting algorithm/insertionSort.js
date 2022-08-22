/*

Insertion sort is a sorting algorithm that places an 
unsorted element at its suitable place in each iteration.

*/

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        /* take refrence value of ith index which will compare 
        later with sorted array */

        temp = arr[i] 
        //for sorted right to left or mid to left
        let j = i-1; 
        while(j >= 0 ){

            /*
            
            if the array of sorted index(j) is less than ith element then
            we will shift the jth index value right side. 
            */
            if(arr[j] > temp){
                //shift
                arr[j+1] = arr[j]
            }
            else{
                break;
            }

            j--
        }
        arr[j+1] = temp
    }

   return arr

}



let arr = [4, 12, 2, 1, 0, 9, 23, 3, 7, 5]
console.log(insertionSort(arr));

/*
output
[
  0, 1, 2,  3,  4,
  5, 7, 9, 12, 23
]
*/