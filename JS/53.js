/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length

  const dp = new Array(n).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < n; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = (dp[i - 1] + nums[i])
    } else {
      dp[i] = nums[i]
    }
  }

  let max = dp[0]
  for (let i = 0; i < n; i++) {
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
}