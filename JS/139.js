/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//dp方法：dp[i]表示是s[0,i-1]能否被空格分成若干个字典中出现的词。
var wordBreak = function (s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true
        break
      }
    }
  }
  console.log(dp)
  return dp[n]

}

let s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict))