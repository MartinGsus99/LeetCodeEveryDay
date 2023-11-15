/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (let c of magazine) {
    map.set(c, map.get(c) ? map.get(c) + 1 : 1)
  }

  for (let c of ransomNote) {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1)
      if (map.get(c) < 0) {
        return false
      }
    } else {
      return false
    }
  }
  return true
}

let ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote, magazine))