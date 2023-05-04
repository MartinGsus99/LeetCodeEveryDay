/**
 * @param {number[]} nums
 * @return {number}
 */
//21.44 58.76
var rob1 = function (nums) {
  const n = nums.length
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return nums[0]
  }

  if (n == 2) {
    return Math.max(nums[0], nums[1])
  }

  let dp = []
  //base case
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  console.log(dp)
  return dp[n - 1]
}

//65.93 96.85
var rob = function (nums) {
  const n = nums.length
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return nums[0]
  }

  if (n == 2) {
    return Math.max(nums[0], nums[1])
  }

  //base case
  a = nums[0]
  b = Math.max(nums[0], nums[1])

  for (let i = 2; i < n; i++) {
    c = Math.max(b, a + nums[i])
    a = b
    b = c
  }
  return c
}


let nums = [2, 1, 1, 2]
console.log(rob(nums))