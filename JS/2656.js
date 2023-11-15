/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  const n = nums.length

  let max = nums[0]
  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }

  let res = max
  for (let i = 1; i < k; i++) {
    res += (i + max)
  }

  return res
}

let nums = [1, 2, 3, 4, 5], k = 3
console.log(maximizeSum(nums, k))