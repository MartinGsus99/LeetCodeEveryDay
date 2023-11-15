/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const n = digits.length
  if (n === 0) {
    return []
  }
  const dict = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  const track = []
  const res = []
  const backTrack = function (count, track) {
    if (track.length === n) {
      res.push(track.join(''))
      return
    }
    let words = dict[digits[count]]
    console.log(words)
    for (let i = 0; i < words.length; i++) {
      track.push(words[i])
      backTrack(count + 1, track)
      track.pop()
    }
  }
  backTrack(0, track)
  return res
}

let digits = "23"
console.log(letterCombinations(digits))