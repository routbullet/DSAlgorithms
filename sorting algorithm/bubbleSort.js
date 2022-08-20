/*

Bubble sort is a simple sorting algorithm. 
This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. 
This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.

*/
/*
Bubble sort algorithm where the largest values bubble up at the top
*/

const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j< arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
            }
        }
    }
    
    return arr;

}

let arr = [4, 12, 2, 1, 0, 9, 23, 3, 7, 5]
console.log(bubbleSort(arr));