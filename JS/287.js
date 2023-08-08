/**
 * @param {number[]} nums
 * @return {number}
 */

//解法：将数据遍历，如果没有变负则乘以负一，否则就是重复数
var findDuplicate = function (nums) {
  const n = nums.length

  let dup = -1

  for (let i = 0; i < n; i++) {
    let index = Math.abs(nums[i])
    if (nums[index] < 0) {
      dup = Math.abs(nums[i])
    } else {
      nums[index] *= -1
    }
  }

  return dup
}