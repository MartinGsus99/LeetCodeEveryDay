/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const n = words.length

  let res = 0
  let oWord = ['a', 'e', 'i', 'o', 'u']
  for (let i = left; i <= right; i++) {
    let temp = words[i]
    if (oWord.indexOf(temp[0]) != -1 && oWord.indexOf(temp[temp.length - 1]) != -1) {
      res++
    }
  }
  return res
}