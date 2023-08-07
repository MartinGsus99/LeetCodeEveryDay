/**
 * @param {string} s
 * @return {number}
 */
//84.35 59.13
var countSubstrings = function (s) {
  let res = 0
  const findOalindra = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
      res++
    }
    return s.substring(l + 1, r)
  }

  for (let i = 0; i < s.length; i++) {
    findOalindra(s, i, i)
    findOalindra(s, i, i + 1)
  }
  return res

}