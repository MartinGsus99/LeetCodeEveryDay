/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const n = nums.length

  const findEveryNumMax = function (num) {
    let res = []
    let max = -Infinity
    while (num > 0) {
      let a = num % 10
      num = Math.floor(num / 10)
      if (a > max) {
        max = a
      }
    }
    return max
  }

  let res = []

  for (let i = 0; i < n; i++) {
    res.push(findEveryNumMax(nums[i]))
  }

  let maxSum = -1
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[i] === res[j]) {
        if (nums[i] + nums[j] > maxSum) {
          maxSum = nums[i] + nums[j]
        }
      }
    }
  }
  return maxSum
}

let nums = [51, 71, 17, 24, 42]
let nums1 = [1, 2, 3, 4]
console.log(maxSum(nums1))