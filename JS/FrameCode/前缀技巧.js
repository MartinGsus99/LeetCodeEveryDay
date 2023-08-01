//时间复杂度N^2,空间复杂度N
var subarraySum = function (nums, k) {
  let n = nums.length
  let sum = []
  sum[0] = 0

  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]
  }

  let ans = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (sum[i] - sum[j] == k) {
        ans++
      }
    }
  }
  return ans
}

//pre solution:直接记录有几个sum[j]==sum[i]-k
//N N
var subarraySumPro = function (nums, k) {
  let n = nums.length
  let preSum = new Map()

  preSum.set(0, 1)

  let ans = 0, sum0_i = 0

  for (let i = 0; i < n; i++) {
    let sum0_j = sum0_i - k
    if (preSum.get(sum0_j)) {
      ans += preSum.get(sum0_j)
    }
    preSum.set(sum0_i, (preSum.get(sum0_i) || 0) + 1)
  }
}