/**
 * @param {string} s
 * @return {boolean}
 */
//能通过，但是超时
var validPalindrome = function (s) {
  let newString = s.toLocaleLowerCase()

  for (let i = 0; i < newString.length; i++) {
    let temp = newString.substring(0, i) + newString.substring(i + 1, newString.length)
    let reversedTemp = temp.split("").reverse().join("")
    if (temp === reversedTemp) {
      return true
    }
  }
  return false
}