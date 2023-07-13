/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//回溯算法:6.60 96.33
var subsets = function (nums) {
  let res = []
  const path = []

  var backtrack = function (nums, start, path) {
    res.push([...path])

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(nums, i + 1, path)
      path.pop()
    }
  }

  backtrack(nums, 0, path)


  return res
}

console.log(subsets([1, 2, 3]))