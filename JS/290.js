/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const p2S = {}
  const s2P = {}
  const words = s.split(" ")
  const n = pattern.length
  const m = words.length
  if (m !== n) {
    return false
  }

  for (let i = 0; i < n; i++) {
    console.log(i, s2P, p2S)
    const x = pattern[i], y = words[i].toString()
    console.log(i, x, y, p2S[x], s2P[y])
    if ((p2S[x] && p2S[x] !== y) || (s2P[y] && s2P[y] !== x)) {
      return false
    }
    p2S[x] = y
    s2P[y] = x
  }
  return true
}

let pattern = "abba", s = "dog constructor constructor dog"
console.log(wordPattern(pattern, s))