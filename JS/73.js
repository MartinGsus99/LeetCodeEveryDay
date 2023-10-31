/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let pos = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        pos.push([i, j])
      }
    }
  }

  while (pos.length !== 0) {
    let cur = pos.pop()
    console.log(cur)
    for (let i = 0; i < m; i++) {
      matrix[i][cur[1]] = 0
    }
    for (let i = 0; i < n; i++) {
      matrix[cur[0]][i] = 0
    }
  }
  return matrix
}
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
console.log("Res:", setZeroes(matrix))