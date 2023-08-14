var sortColor = function (nums) {
  return nums.sort(function (a, b) {
    return a - b
  })
}

nums = [2, 0, 2, 1, 1, 0]
console.log(sortColor(nums))