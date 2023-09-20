/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  let dp = new Array(m).fill(0).map(() => {
    return new Array(n).fill(0)
  })

  for (let i = 0; i < n; i++) {
    dp[0][i] = parseInt(matrix[0][i])
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = parseInt(matrix[i][0])
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === '0') {
        dp[i][j] = 0
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1

      }
    }
  }
  let max = dp[0][0]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] > max) {
        max = dp[i][j]
      }
    }
  }

  console.log(dp)

  return max * max
}

let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
let matrix1 = [["0", "1"], ["1", "0"]]
console.log(maximalSquare(matrix1))