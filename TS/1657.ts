function closeStrings(word1: string, word2: string): boolean {
  //使用map如果字典数值相同那就是满足操作1
  const dict1 = new Set()
  const dict2 = new Set()

  for (let c of word1) {
    if (!dict1.has(c)) {
      dict1.set(c, 1)
    }
  }
}
