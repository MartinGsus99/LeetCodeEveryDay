/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//法国国旗分配法
var moveZeroes = function (nums) {
  const n = nums.length

  let right = n - 1
  const swap = function (i, nums) {
    let temp = nums[i]
    for (let j = i; j < nums.length; j++) {
      nums[j] = nums[j + 1]
    }
    nums[nums.length - 1] = temp
  }

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      swap(i, nums)
      right--
      i--
    }
  }
  console.log(nums)
}


let nums = [0, 0, 1]
moveZeroes(nums)