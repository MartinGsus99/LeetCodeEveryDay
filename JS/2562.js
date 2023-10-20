/**
 * @param {number[]} nums
 * @return {number}
 */
//双指针秒了
var findTheArrayConcVal = function (nums) {
  const n = nums.length
  let left = 0
  let right = n - 1
  let sum = 0
  while (left < right) {
    let cur = nums[left].toString() + nums[right].toString()
    sum += parseInt(cur)
    left++
    right--
  }
  if (left == right) {
    sum += nums[left]
  }
  return sum
}

let nums = [7, 52, 2, 4]
let nums1 = [5, 14, 13, 8, 12]
console.log(findTheArrayConcVal(nums1))