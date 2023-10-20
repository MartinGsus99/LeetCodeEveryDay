/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
//11.11 72.22
var categorizeBox = function (length, width, height, mass) {
  const volumn = length * width * height

  let res = []

  if (mass >= 100) {
    res.push('Heavy')
  }

  if (length >= 10000 || width >= 10000 || height >= 10000 || volumn >= Math.pow(10, 9)) {
    res.push('Bulky')
  }

  console.log(res)

  if (res.length === 0) {
    return 'Neither'
  } else if (res.length == 1) {
    return res[0]
  } else if (res.length == 2) {
    return 'Both'
  }
}