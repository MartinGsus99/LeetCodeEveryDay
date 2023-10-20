/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let res = []
  arr.forEach((value,index) => {
    res.push(fn(value,index))
  })
  return res
}