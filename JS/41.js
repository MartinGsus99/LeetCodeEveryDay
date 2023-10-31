/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length
  let minPlus = 1
  nums = nums.sort(function (a, b) {
    return a - b
  })
  console.log(nums)

  for (let i = 0; i < n; i++) {
    if (nums[i] === minPlus) {
      minPlus += 1
    }
  }
  return minPlus
}

//leetcode方法
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length


  let map = new Map()

  for (let i = 0; i < n; i++) {
    if(nums[i]<0){
      map.set(nums[i],n+1)
    }
    else{
      map.set(nums[i],nums[i])
    }
  }
  
  let min
  for(let value of map){
    
  }


}

let nums = [7, 8, 9, 11, 12]
let nums1 = [3, 4, -1, 1]
let nums2 = [2, 1]
console.log(firstMissingPositive(nums))
console.log(firstMissingPositive(nums1))
console.log(firstMissingPositive(nums2))