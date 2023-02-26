/**
 * @param {number} numRows
 * @return {number[][]}
 */
//备忘录法：95.52 25.19
var generate = function (numRows) {
    var triangle = [];

    triangle[0] = [1];

    if(numRows==1){
        return triangle;
    }
    triangle[1] = [1, 1];
    if(numRows==2){
        return triangle;
    }

    for (let i = 2; i < numRows; i++) {
        triangle[i] = [1];
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i].push(1);
    }
    return triangle;
};
