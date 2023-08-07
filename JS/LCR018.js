/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //正则匹配：需要的字符，然后反转字符串与源字符串比较
  let reg = /[^a-zA-Z0-9]/g,
    newS = s.replace(reg, '').toLowerCase()
  let reversedS = newS.split('').reverse().join('')
  return newS === reversedS
}

let s = "race a car"
let s1 = "A man, a plan, a canal: Panama"
let s2 = ".,"
console.log(isPalindrome(s2))