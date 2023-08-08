//给定一个数组，其中有长度为N的数据，但是其中有个数重复了导致某个数发生了缺失，请找出缺失的元素和重复的元素
var findLostNum = function (nums) {
  const n = nums.length
  let dup = -1
  for (let i = 0; i < n; i++) {
    let index = abs(nums[i])
    if (nums[index] < 0) {
      dup = abs(nums[i])
    } else {
      nums[index] *= -1
    }
  }

  let missing = -1
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      missing = i
    }
  }

  return [dup, missing]
}