/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return []
    }
    const rows = matrix.length
    const columns = matrix[0].length
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1
    const res = []
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            res.push(matrix[top][column])
        }

        for (let row = top + 1; row <= bottom; row++) {
            res.push(matrix[row][right])
        }

        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                res.push(matrix[bottom][column])
            }
            for (let row = bottom; row > top; row--) {
                res.push(matrix[row][left])
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
    }
    return res
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix))