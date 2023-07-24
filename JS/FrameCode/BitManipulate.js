//汉明权重
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0
  while (n != 0) {
    n = n & (n - 1)
    res++
  }
  return res
}

//判断同一个数是不是2的指数：如果一个数是2的指数，那么其二进制一定只含有一个1
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false
  }
  return (n & (n - 1) == 0)
}

console.log(isPowerOfTwo(31))
