/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = {}
  const mapT = {}

  const n = s.length

  for (let i = 0; i < n; i++) {
    const x = s[i], y = t[i]
    if ((mapS[x] && mapS[x] !== y) || (mapT[y] && mapT[y] !== x)) {
      return false
    }
    mapS[x] = y
    mapT[y] = x
  }
  return true
}


let s = "egg", t = "add"
console.log(isIsomorphic(s, t))