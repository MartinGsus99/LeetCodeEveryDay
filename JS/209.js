/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//5.05 5.01
var minSubArrayLen1 = function (target, nums) {
  let n = nums.length
  let sum = []
  sum[0] = 0
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]
  }

  let ans = Infinity
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (sum[i] - sum[j] >= target) {
        if (i - j < ans) {
          ans = i - j
        }
      }
    }
  }
  return ans == Infinity ? 0 : ans
}

var minSubArrayLen = function (target, nums) {
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


let target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]
console.log(minSubArrayLen(target, nums))