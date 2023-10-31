
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//先排序，然后二分查找，如果当前数字大于0，则不需要继续了
var threeSum = function (nums) {
  const n = nums.length

  if (n < 3) {
    return []
  }

  nums.sort(function (a, b) {
    return a - b
  })

  let res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1, r = n - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      } else if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--
      }
    }
  }
  return res
}


nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))