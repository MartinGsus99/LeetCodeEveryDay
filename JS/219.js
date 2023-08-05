/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//70.26 20.00
var containsNearbyDuplicate = function (nums, k) {
  const n = nums.length
  if (n === 0) {
    return false
  }

  let map = new Map()

  for (let i = 0; i < n; i++) {
    let num = nums[i]
    if (map.has(num) && i - map.get(num) <= k) {
      return true
    }
    map.set(num, i)
  }
  return false
}

let nums = [1, 2, 3, 1, 2, 3], k = 2
let nums1 = [1, 2, 3, 1], k1 = 3
let nums2 = [1, 0, 1, 1], k2 = 1
console.log(containsNearbyDuplicate(nums2, k2))