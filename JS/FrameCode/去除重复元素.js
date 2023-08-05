//快慢指针
var deleteRepeatedEle = function (nums) {
  const n = nums.length

  if (n == 0) {
    return []
  }
  let slow = 0, fast = 1

  while (fast < n) {
    if (nums[slow] != nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  console.log(nums)
  return nums.slice(0, slow + 1)
}

let nums = [1, 1, 2, 2, 3, 3, 3, 4]
console.log(deleteRepeatedEle(nums))