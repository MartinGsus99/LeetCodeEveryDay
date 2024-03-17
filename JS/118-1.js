/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const n = numRows

  const dp = []
  for (let i = 0; i < n ; i++) {
    let rowNums = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++) {
      rowNums[j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
    dp.push(rowNums)
  }
  return dp
}