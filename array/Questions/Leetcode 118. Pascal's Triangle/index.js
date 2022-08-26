/*
Leetcode 118. Pascal's Triangle


Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers 
directly above it as shown:

*/



/*
Input: numRows = 5
Output: 
        [ 
                [1],
               [1,1],
              [1,2,1],
             [1,3,3,1],
            [1,4,6,4,1]
        
        ]
*/


const pascalTriangle = (rowNums) => {
    let pascal = []
    for(let i = 0; i < rowNums; i++){
        //the first and the last index should be 1.

        let row = new Array(i+1);
        
        row[0] = 1
        row[row.length - 1] = 1

        // iterate for row specifically index 1 to (last-1) or second index

        for(let j = 1; j < i; j++){

                    // going back previous row and apply calculation
            row[j] = pascal[i-1][j] + pascal[i-1][j-1]
        }

        //push or add into pascal array

        pascal[i] = row


    }

    return pascal
}



let rowNums = 6

console.log(pascalTriangle(rowNums));

/*
Output: 
        [ 
                [1],
               [1,1],
              [1,2,1],
             [1,3,3,1],
            [1,4,6,4,1]
        
        ]
*/