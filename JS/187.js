/**
 * @param {string} s
 * @return {string[]}
 */
//hash表记录:16.55 9.46
var findRepeatedDnaSequences = function (s) {
  let hashMap = {}
  let len = s.length
  let res = []
  for (let i = 0; i < len; i++) {
    let str = s.substring(i, i + 10)
    hashMap[str] = (hashMap[str] || 0) + 1
    if (hashMap[str] == 2) {
      res.push(str)
    }
  }
  return res
}

s = "AAAAAAAAAAAAA"

console.log(findRepeatedDnaSequences(s))

//方法二：哈希表 + 滑动窗口 + 位运算
var findRepeatedDnaSequences1 = function (s) {
  const L = 10
  const bin = new Map()
  bin.set('A', 0)
  bin.set('C', 1)
  bin.set('G', 2)
  bin.set('T', 3)

  const ans = []
  const n = s.length
  if (n <= L) {
    return ans
  }
  let x = 0
  for (let i = 0; i < L - 1; ++i) {
    x = (x << 2) | bin.get(s[i])
  }
  const cnt = new Map()
  for (let i = 0; i <= n - L; ++i) {
    x = ((x << 2) | bin.get(s[i + L - 1])) & ((1 << (L * 2)) - 1)
    cnt.set(x, (cnt.get(x) || 0) + 1)
    if (cnt.get(x) === 2) {
      ans.push(s.slice(i, i + L))
    }
  }
  return ans
}
s = "AAAAAAAAAAAAA"

console.log(findRepeatedDnaSequences1(s))