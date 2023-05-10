/**
 * @param {number[]} nums
 * @return {number}
 */
//未通过
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

  if (n == 3) {
    return Math.max(nums[0], nums[1], nums[2])
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

//书籍版本:13.67 67.18
var rob = function (nums) {
  const n = nums.length

  if (n == 1) {
    return nums[0]
  }

  var robRange = function (nums, start, end) {
    const n = nums.length
    let a = 0
    let b = 0

    let c = 0

    //从反方向遍历，此处是取了两个区间进行数据的获取
    for (let i = end; i >= start; i--) {
      c = Math.max(a, b + nums[i])
      b = a
      a = c
    }
    return c
  }

  //取出两种情况的最大值，取第一个或者取最后一个（其实还有两头都不取这个情况） 
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1))
}

let nums = [1, 2, 1, 1]
console.log(rob(nums))