/**
 * @param {number[]} nums
 * @return {number}
 */
//思路：发现一个重复的数字，就将其后全部前移
var removeDuplicates = function (nums) {
  let n = nums.length
  let slow = 2
  let fast = 2

  if (nums.length < 3) {
    return n
  }

  while (fast < n) {
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
}

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
removeDuplicates(nums)
