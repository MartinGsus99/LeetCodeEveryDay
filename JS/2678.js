/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  const n = details.length

  let res = 0

  for (let i = 0; i < n; i++) {
    let temp = details[i]
    let age = temp.substring(11, 13)
    console.log(age)
    if (parseInt(age) > 60) {
      res++
    }
  }
  return res
}

let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]
console.log(countSeniors(details))