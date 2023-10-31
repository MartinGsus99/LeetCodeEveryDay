/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let temp = num
  const arr = temp.toString().split('')
  const n = arr.length
  const map = new Map()
  let res = 0
  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      res += 1
    } else {
      if (num % arr[i] === 0) {
        res += 1
        map.set(arr[i], 1)
      }
    }
  }
  return res
}

console.log(countDigits(121))