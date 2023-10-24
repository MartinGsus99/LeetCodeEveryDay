/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const mod = 1e9 + 7
  const dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      for (let p = 1; p <= k; p++) {
        if (j >= p) {
          dp[i][j] += dp[i - 1][j - p]
          dp[i][j] %= mod
        }
      }
    }
  }
  return dp[n][target]
}

let n = 30, k = 30, target = 500
console.log(numRollsToTarget(n, k, target))