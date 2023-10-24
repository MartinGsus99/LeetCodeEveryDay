/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length
  let indexL = 0, indexR = n - 1
  let pointer = 0
  const swap = function (nums, a, b) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
  for (let pointer = 0; pointer <= indexR; pointer++) {
    if (nums[pointer] == 0) {
      swap(nums, indexL, pointer)
      indexL++
    } else if (nums[pointer] == 2) {
      swap(nums, indexR, pointer)
      indexR--
      pointer--
    }
  }

}