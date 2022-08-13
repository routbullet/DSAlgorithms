// Linear Search..

const LinearSearch = (arr, element) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return `The value is found : ${element} and the idex of the element is ${i}.`
        }
    }
}


console.log(LinearSearch([9, 2, 1, 5, 7, 11, 4], 7));
