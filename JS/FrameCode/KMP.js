//其实是DP问题；
//通过pat计算出dp数组，无论任何text都可以通过dp数组计算出来；

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//暴力匹配法
var strStr = function (haystack, needle) {
  const m = haystack.length
  const n = needle.length

  for (var i = 0; i < m; i++) {
    const flag = i
    for (var j = 0; j < n; j++) {
      console.log(haystack[i], needle[j])

      if (haystack[i] !== needle[j]) {
        console.log("Dismateched...")
        i = flag
        j = 0
        break
      }
      if (j == n - 1) {
        console.log("Matched!")
        return i - j - 1
      }
    }
  }
  return -1
}

s1 = "sadbutsad"
pat = "sad"
s2 = "mississippi"
pat2 = "issi"

console.log(strStr(s1, pat))