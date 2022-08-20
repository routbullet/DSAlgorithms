/*

Selection sort is a sorting algorithm that selects the smallest element 
from an unsorted list in each iteration and places that element at the 
beginning of the unsorted list.

*/


const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let smallestElement = i
        for(j=i+1; j< arr.length; j++){
            if(arr[smallestElement] > arr[j]){
                smallestElement = j
            }
        }
        [arr[i], arr[smallestElement]] = [arr[smallestElement], arr[i]]
    }
    return arr

}


let arr = [4, 12, 2, 1, 0, 9, 23, 3, 7, 5]
console.log(selectionSort(arr));

/* output

[
    0, 1, 2,  3,  4,
    5, 7, 9, 12, 23
]

*/