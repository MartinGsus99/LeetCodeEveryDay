/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    let minN = Number.MAX_VALUE
    for (let j = 1; j * j <= i; j++) {
      minN = Math.min(minN, dp[i - j * j])
    }
    dp[i] = minN + 1
  }
  return dp[n]
}

let n = 12
console.log(numSquares(n))