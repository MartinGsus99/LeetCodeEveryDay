/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//思路：按位异或，统计1的个数 31.97 37.87
var hammingDistance = function (x, y) {
  let target = x ^ y

  var hammingWeight = function (n) {
    let res = 0
    while (n != 0) {
      n = n & (n - 1)
      res++
    }
    return res
  }

  return hammingWeight(target)
}

//官方解法：94.56 69.84
var hammingDistance = function (x, y) {
  let s = x ^ y, ret = 0
  while (s != 0) {
    ret += s & 1
    s >>= 1
  }
  return ret
}
