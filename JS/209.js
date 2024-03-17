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
  const n = nums.length

  let l = r = sum = 0
  let res = len + 1

  while (r < len) {
    sum += nums[r++]

    while (sum >= target) {
      res = res < r - l ? res : r - l
      sum-=nums[l++]
    }
  }

  return res>len?0:res
}


let target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]
console.log(minSubArrayLen(target, nums))