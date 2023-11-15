/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  const n = s.length

  let count = [0, 0]
  let res = 0
  for (let i = 0; i < n; i++) {
    if (s[i] == '1') {
      count[1]++
      res = Math.max(res, 2 * Math.min(count[0], count[1]))
    } else if (s[i - 1] == '1' || i === 0) {
      count[0] = 1
      count[1] = 0
    } else {
      count[0]++
    }
  }
  return res
}