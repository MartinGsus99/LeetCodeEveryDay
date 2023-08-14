/**
 * @param {string} s
 * @return {string}
 */
//暴力遍历
var longestPalindrome = function (s) {
  const n = s.length
  let substirng = ""
  if (n < 2) {
    return s
  }

  const find = function (left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--
      right++
    }

    if (right - left - 1 > substirng.length) {
      substirng = s.slice(left + 1, right)
    }
  }

  for (let i = 0; i < n; i++) {
    find(i, i)
    find(i, i + 1)
  }

  return substirng


}