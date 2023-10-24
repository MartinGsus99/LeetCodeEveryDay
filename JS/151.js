/**
 * @param {string} s
 * @return {string}
 */
//分割存为数组反向输出 93.87 88.02
var reverseWords = function (s) {
  const words = s.split(" ")

  let newString = ""
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] != '') {
      newString = newString + ' ' + words[i]
    }
  }
  return newString.trim()
}

let s = ["the sky is blue", "  hello world  ", "a good   example"]
for (let i = 0; i < s.length; i++) {
  console.log(reverseWords(s[i]))
}