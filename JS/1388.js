/**
 * @param {number[]} slices
 * @return {number}
 */
//动态规划：使用二维数组存放，dp[i][j]表示第i轮选择j能够获得的pizza大小，每次选择：dp[i][j][k]=Math.max(dp[i-1][j][1],dp[i-1][j][0])+slices[j]
var maxSizeSlices = function (slices) {
  const v1 = slices.slice(1)
  const v2 = slices.slice(0, slices.length - 1)
  const ans1 = calculate(v1)
  const ans2 = calculate(v2)
  return Math.max(ans1, ans2)
}

const calculate = (slices) => {
  const N = slices.length
  const n = Math.floor((slices.length + 1) / 3)
  const dp = new Array(N).fill(0).map(() => new Array(n + 1).fill(-Infinity))
  dp[0][0] = 0, dp[0][1] = slices[0]
  dp[1][0] = 0, dp[1][1] = Math.max(slices[0], slices[1])
  for (let i = 2; i < N; i++) {
    dp[i][0] = 0
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 2][j - 1] + slices[i])
    }
  }
  return dp[N - 1][n]
}



let slices = [8, 9, 8, 6, 1, 1]

console.log(maxSizeSlices(slices))