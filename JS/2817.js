/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  const n = nums.length
  let minAbs = Infinity
  for (let i = 0; i < n; i++) {
    for (let j = i + x; j < n; j++) {
      if (Math.abs(nums[j] - nums[i]) < minAbs) {
        minAbs = Math.abs(nums[j] - nums[i])
      }
    }
  }
  return minAbs
}

let nums = [4, 3, 2, 4]
let x = 2

console.log(minAbsoluteDifference(nums, x))