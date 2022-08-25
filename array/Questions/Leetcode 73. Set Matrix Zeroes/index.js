//Leetcode 73. Set Matrix Zeroes

/*
Given an m x n integer matrix matrix, if an element is 0, 
set its entire row and column to 0's.

You must do it in place.


Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
*/


const setMatrixZero = (matrix) => {
    let mRowLen = matrix.length, nColLen = matrix[0].length
    let isCol = false, isRow = false

    // for traversing row 0(first row)
    for(let row = 0; row < mRowLen; row++){
          
        if(matrix[row][0] === 0){
            isCol = true
        }   
    }

    // for traversing col 0(first column in matrix)
    for(let col = 0; col < nColLen; col++){
        if(matrix[0][col] === 0){
            isRow = true;
        }  
       
    }   

    // for traversing remaining element in the matrix except first row and first column

    for(let row = 1; row < mRowLen; row++){
        for(let col = 1; col < nColLen; col++){
            if(matrix[row][col] === 0){
                matrix[row][0] = 0
                matrix[0][col] = 0
            }
        }
    }

    /* making zero for traversing entire first column if we get 0,
        then we will make zero in entire row
    */
    for(let row = 1; row < mRowLen; row++){
        if(matrix[row][0] === 0){
            for(let col = 0; col < nColLen; col++){
                matrix[row][col] = 0
            }
        }
    }
    // above step for first row
    for(let col = 1; col < nColLen; col++){
        if(matrix[0][col] === 0){
            for(let row = 0; row < mRowLen; row++){
                matrix[row][col] = 0
            }
        }
    }


    if(isRow === true){
        for(let col = 0; col < nColLen; col++){
            matrix[0][col] = 0
        }
    }

    if(isCol === true){
        for(let row = 0; row < mRowLen; row++){
            matrix[row][0] = 0
        }
    }


    return matrix




}


let matrix = [[1,1,1],[1,0,1],[1,1,1]]  // Output: [[1,0,1],[0,0,0],[1,0,1]]

console.log(setMatrixZero(matrix));