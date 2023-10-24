/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//前缀和：计算出当前节点的前面所有元素之和,前缀和表格第一项应该为0
var subarraySum = function (nums, k) {
  let sum = 0
  const n = nums.length
  const table = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    table[i + 1] = sum
  }
  console.log(table)
  let res = 0

  for (let i = 0; i < n + 1; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      console.log(table[i], table[j])
      if (table[j] - table[i] === k) {
        res += 1
      }
    }
  }
  return res
}

let nums = [1, 1, 1], k = 2
console.log(subarraySum(nums, k))