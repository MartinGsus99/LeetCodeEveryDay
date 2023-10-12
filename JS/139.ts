function wordBreak(s: string, wordDict: string[]): boolean {
  const n: number = s.length
  const wordDictSet: Set<string> = new Set(wordDict)
  const dp: Array<boolean> = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substring(j, i - j))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}



