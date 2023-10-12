/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave1 = function (s1, s2, s3) {
  const n = s3.length

  for (let i = 0; i < n; i++) {
    let c = s3.slice(0, 1)
    if (s1[0] === c) {
      s1 = s1.substring(1, s1.length)
      console.log(s1, s2, s3)
    } else if (s2[0] === c) {
      s2 = s2.substring(1, s2.length)
      console.log(s1, s2, s3)
    } else {
      return false
    }
  }
  return true
}

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const n = s1.length
  const m = s2.length
  const k = s3.length

  let dp = new Array(n + 1).fill().map(() => {
    new Array(m + 1).fill(0)
  })

  console.log(dp)
}

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3))