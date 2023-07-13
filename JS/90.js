/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//63.70 81.80
var subsetsWithDup = function (nums) {
  let res = []
  let path = []
  nums.sort(function (a, b) {
    return a - b
  })
  console.log(nums)

  var backtrack = function (start, nums, path) {
    if (res.indexOf(path) == -1) {
      res.push([...path])
    }

    for (let i = start; i < nums.length; i++) {
      if (nums[i] == nums[i - 1] && i > start) {
        continue
      }
      path.push(nums[i])
      backtrack(i + 1, nums, path)
      path.pop()
    }
  }

  backtrack(0, nums, path)
  return res
}

console.log(subsetsWithDup([1, 2, 2]))