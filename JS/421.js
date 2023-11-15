/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  const n = nums.length
  let tempMax = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      tempMax = Math.max(tempMax, nums[i] ^ nums[j])
    }
  }
  return tempMax
}

let nums = [3, 10, 5, 25, 2, 8]
let nums1 = [14,70,53,83,49,91,36,80,92,51,66,70]
console.log(findMaximumXOR(nums1))