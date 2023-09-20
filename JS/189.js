/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//40.28 84.94
var rotate1 = function (nums, k) {
  const n = nums.length
  const newArray = new Array(n)
  for (let i = 0; i < n; i++) {
    let pos = (i + k) % (n)
    newArray[pos] = nums[i]
  }
  for (let i = 0; i < n; i++) {
    nums[i] = newArray[i]
  }
}

//反转数组 57.42 41.10
var rotate = function (nums, k) {
  const n = nums.length

  const reverse = function (s, e, nums) {
    while (s < e) {
      let temp = nums[s]
      nums[s] = nums[e]
      nums[e] = temp
      s++
      e--
    }
  }

  k %= n

  reverse(0, n - 1, nums)
  reverse(0, k - 1, nums)
  reverse(k, n - 1, nums)

}


let nums = [1, 2, 3, 4, 5, 6, 7], k = 3
console.log(rotate(nums, k))