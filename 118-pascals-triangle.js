/**
 * @param {number} numRows
 * @return {number[][]}
 */
// Input: numRows = 5
// Output: [
//             [1],
//            [1,1],
//           [1,2,1],
//          [1,3,3,1],
//         [1,4,6,4,1]
//         ]
// first and last is always 1
// integers other than 1 are gather from the sum of the 2 integers above it
// input == number of rows of triangle
// generate row by row
// row[0] = 1 , row[row.length] = 1
// to generate the middle values... always looking at parent or j and the one to the left to the left the left of the parent... j-1

var generate = function(numRows) {
    let triangle = new Array(numRows)
    
    // iterate ROW by ROW, creating each row and calculating row[0], row[row.length - 1], and any others in between
    for (let i = 0; i < numRows; i++){
        let row = new Array(i + 1)
        
        row[0] = 1
        row[row.length - 1] = 1
        
        // calc everything between 1... and ... 1
        for (let j = 1; j < row.length - 1; j++) {
            // get row above
            let rowAbove = triangle[i - 1]
            // then get the row above values need to calculate the current row's filler
            row[j] = rowAbove[j] + rowAbove[j - 1]
        }
        // this row is complete, add it to the triangle and go to the next row
        triangle[i] = row
    }
    return triangle
};