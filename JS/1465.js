/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
//贪心算法
var maxArea = function (h, w, horizontalCuts, verticalCuts) {


  horizontalCuts.unshift(0)
  horizontalCuts.push(h)
  verticalCuts.unshift(0)
  verticalCuts.push(w)

  horizontalCuts = horizontalCuts.sort(function (a, b) {
    return a - b
  })
  verticalCuts = verticalCuts.sort(function (a, b) {
    return a - b
  })

  let maxCol = 0
  let maxRow = 0

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxCol = Math.max(maxCol, horizontalCuts[i] - horizontalCuts[i - 1])
  }

  for (let i = 1; i < verticalCuts.length; i++) {
    maxRow = Math.max(maxRow, verticalCuts[i] - verticalCuts[i - 1])
  }

  console.log(maxCol, maxRow)
  const mod = 1e9 + 7
  return (BigInt(maxCol) * BigInt(maxRow)) % BigInt(mod)

}

var maxArea1 = function (h, w, horizontalCuts, verticalCuts) {
  const mod = 1e9 + 7
  horizontalCuts.sort((a, b) => a - b)
  verticalCuts.sort((a, b) => a - b)
  var calMax = function (arr, boardr) {
    let res = 0, pre = 0
    for (let i = 0; i < arr.length; i++) {
      res = Math.max(arr[i] - pre, res)
      pre = arr[i]
    }
    return Math.max(res, boardr - pre)
  }
  console.log(calMax(horizontalCuts, h), calMax(verticalCuts, w))
  return BigInt(calMax(horizontalCuts, h)) * BigInt(calMax(verticalCuts, w)) % BigInt(mod)
}



let h = 1000000000, w = 1000000000, horizontalCuts = [2], verticalCuts = [2]
console.log(maxArea(h, w, horizontalCuts, verticalCuts))
console.log(maxArea1(h, w, horizontalCuts, verticalCuts))