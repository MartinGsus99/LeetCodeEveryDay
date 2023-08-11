/**
 * @param {number[][]} grid
 * @return {number}
 */


//思路一，每一行都选最小的，局部最小达到全局最小
var minFallingPathSum1 = function (grid) {
  const n = grid.length
  let sum = 0
  let flag = 0
  let min = grid[0][0]

  for (let i = 0; i < grid[0].length; i++) {

    if (grid[0][i] < min) {
      min = grid[0][i]
      flag = i
    }
  }

  sum += min

  for (let i = 1; i < n; i++) {
    if (flag == 0) {
      min = grid[i][1]
    }
    for (let j = 0; j < grid[i].length; j++) {

      if (j !== flag) {
        if (min > grid[i][j]) {
          min = grid[i][j]
          flag = j
        }
      }
    }

    sum += min
  }
  return sum

}


//dp方法
var minFallingPathSum = function (grid) {
  //初始化dp
  const n = grid.length

  const dp = new Array(n).fill(0).map(() => new Array(n).fill(Infinity))

  for (let i = 0; i < n; i++) {
    dp[0][i] = grid[0][i]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (j == k) {
          continue
        } else {
          dp[i][j] = Math.min(dp[i - 1][k] + grid[i][j], dp[i][j])
        }
      }
    }

  }
  return Math.min(...dp[n - 1])
}

let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(minFallingPathSum(grid))