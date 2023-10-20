/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const nums = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) nums.push(arr[i])
  }
  return nums
}