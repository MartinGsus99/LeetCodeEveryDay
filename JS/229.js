/**
 * @param {number[]} nums
 * @return {number[]}
 */
//排序后计算次数:8.82 5.88
var majorityElement = function (nums) {
  nums.sort(function (a, b) {
    return a - b
  })

  const n = nums.length
  const temp = Math.floor(n / 3)
  let map = new Map()
  for (let i = 0; i < n; i++) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  let res = []
  for (let c of map) {
    if (c[1] > temp) {
      res.push(c[0])
    }
  }
  return res
}

let nums = [3, 2, 3]
console.log(majorityElement(nums))