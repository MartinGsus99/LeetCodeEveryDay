var longestPalindrome = function (string) {

  var findPalindrome = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    return s.substring(l + 1, r)
  }

  let maxStr = ""
  for (let i = 0; i < string.length; i++) {
    let temp1 = findPalindrome(string, i, i)
    let temp2 = findPalindrome(string, i, i + 1)
    maxStr = maxStr.length > temp1.length ? maxStr : temp1
    maxStr = maxStr.length > temp2.length ? maxStr : temp2
  }
  return maxStr
}

let s = "abba"
let s1 = "abcbadddddddd"

console.log(longestPalindrome(s))