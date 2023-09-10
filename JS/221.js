/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  console.log(m, n)
  let res = new Array(m).fill(new Array(n).fill(0))
  console.log(res)
  for (let i = 0; i < m; i++) {
    res[i][0] = matrix[i][0]
  }

  for (let j = 0; j < n; j++) {
    res[0][j] = matrix[0][j]
  }


  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[i][j] = (1 + Math.min(res[i - 1][j - 1], res[i - 1][j], res[i][j - 1])) ^ 2
    }
  }

  console.log(res)
}

let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
console.log(maximalSquare(matrix))