/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
//暴力循环 66.33 67.84
var circularGameLosers = function (n, k) {
  const map = new Array(n).fill(0)
  let index = 0
  let count = 1
  while (map[index] !== 1) {
    map[index] = 1
    index = ((count * k) + index) % n
    count++
  }
  let res = []
  for (let i = 0; i < map.length; i++) {
    if (map[i] !== 1) {
      res.push(i + 1)
    }
  }
  return res
}
//1 2
//2 0

console.log('2,0', circularGameLosers(2, 0))
console.log('2,1', circularGameLosers(2, 1))
console.log('2,2', circularGameLosers(2, 2))
console.log('5,2', circularGameLosers(5, 2))