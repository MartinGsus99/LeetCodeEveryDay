function maxProduct(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }
  const dp: number[] = new Array(nums.length).fill(1)
  dp[0] = nums[0]

  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] * nums[i])
  }

  let max = dp[0]
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(dp[i], max)
  }
  return max
}

let nums: number[] = [2, 3, -2, 4]
console.log(maxProduct(nums))
