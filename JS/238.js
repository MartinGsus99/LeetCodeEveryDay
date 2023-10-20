/**
 * @param {number[]} nums
 * @return {number[]}
 */
//暴力:测试用例通过了，但耗时太长。
var productExceptSelf = function (nums) {
  const n = nums.length

  const res = new Array().fill()

  for (let i = 0; i < n; i++) {
    let temp = 1
    for (let j = 0; j < n; j++) {
      if (j != i) {
        temp *= nums[j]
      }
    }
    res.push(temp)
  }
  console.log(res)
  return res
}

//左右前缀填空:43.90 55.36
//创建两个数组L[],R[],L[i]表示i左边所有数字相乘的积
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  const n = nums.length

  const L = new Array(n).fill(0)
  const R = new Array(n).fill(0)

  let tempL = 1
  for (let i = 0; i < n; i++) {
    tempL = tempL * nums[i]
    L[i] = tempL
  }

  let tempR = 1
  for (let i = n - 1; i >= 0; i--) {
    tempR = tempR * nums[i]
    R[i] = tempR
  }

  let res = new Array(n).fill()
  for (let i = 1; i < n - 1; i++) {
    res[i] = L[i - 1] * R[i + 1]
  }

  let l = 1
  for (let i = 1; i < n; i++) {
    l *= nums[i]
  }

  let r = 1
  for (let i = n - 2; i >= 0; i--) {
    r *= nums[i]
  }
  res[0] = l
  res[n - 1] = r
  return res
}

let nums = [1, 2, 3, 4]
let nums1 = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))
